import { useQuery } from "@tanstack/react-query";

export function useVersions() {
    return useQuery({
        queryKey: ["versions"],
        queryFn: async () => {
            const res = await fetch("/api/version");

            if (!res.ok) {
                throw new Error(
                    "Failed to fetch versions"
                );
            }

            return res.json();
        },
    });
}