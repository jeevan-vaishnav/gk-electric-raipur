import { getDb } from "@/lib/mongodb";

export class DashboardService {
    async getDashboardData() {
        const db = await getDb();

        const [parts, suppliers, functions, variants] = await Promise.all([
            db.collection("parts").find({}).toArray(),
            db.collection("suppliers").find({}).toArray(),
            db.collection("functions").find({}).toArray(),
            db.collection("variants").find({}).toArray(),
        ]);


        // System Distribution
        const systemDistributionMap = new Map<
            string,
            number
        >();

        parts.forEach((part) => {
            const code = part.systemGroupCode;

            systemDistributionMap.set(
                code,
                (systemDistributionMap.get(code) ?? 0) + 1
            );
        });

        const systemDistribution = Array.from(
            systemDistributionMap.entries()
        ).map(([code, count]) => ({
            code,
            count,
        }));
        // Last 7 Days Chart
        const chartData = Array.from(
            { length: 7 },
            (_, index) => {
                const date = new Date();

                date.setDate(
                    date.getDate() - (6 - index)
                );

                const key = date
                    .toISOString()
                    .split("T")[0];

                const count = parts.filter(
                    (part) =>
                        new Date(part.createdAt)
                            .toISOString()
                            .split("T")[0] === key
                ).length;

                return {
                    day: date.toLocaleDateString(
                        "en-IN",
                        {
                            weekday: "short",
                        }
                    ),
                    parts: count,
                };
            }
        );


        return {
            stats: {
                totalParts: parts.length,
                totalSuppliers: suppliers.length,
                totalFunctions: functions.length,
                totalVariants: variants.length,
            },
            recentParts: parts
                .sort(
                    (a, b) =>
                        new Date(b.createdAt).getTime() -
                        new Date(a.createdAt).getTime()
                )
                .slice(0, 10),
            systemDistribution,
            chartData,

        };
    }
}