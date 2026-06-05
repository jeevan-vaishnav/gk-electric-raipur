import dotenv from "dotenv";

dotenv.config({
    path: ".env.local",
});

console.log("Loaded URI:", process.env.MONGODB_URI);

import { getDb } from "@/lib/mongodb";


async function main() {
    const db = await getDb();
    await db.collection("functions").createIndex(
        {
            groupCode: 1,
            functionNo: 1,
        },
        {
            unique: true,
            name: "groupCode_functionNo_unique",
        }

    );

    await db.collection("systemGroups").createIndex(
        { code: 1 },
        {
            unique: true,
            name: "code_unique",
        }
    );
    await db.collection("importIndigenous").createIndex(
        { code: 1 },
        {
            unique: true,
            name: "code_unique",
        }
    );

    await db.collection("suppliers").createIndex(
        { code: 1 },
        {
            unique: true,
            name: "supplier_code_unique",
        }
    );

    await db.collection("versions").createIndex(
        { code: 1 },
        {
            unique: true,
            name: "version_code_unique",
        }
    );
    await db.collection("variants").createIndex(
        { code: 1 },
        {
            unique: true,
            name: "variant_code_unique",
        }
    );
    await db
        .collection("parts")
        .createIndex(
            { partNumber: 1 },
            {
                unique: true,
                name: "part_number_unique",
            }
        );

    await db
        .collection("parts")
        .createIndex({
            partName: 1,
        });

    await db
        .collection("parts")
        .createIndex({
            systemGroupCode: 1,
        });

    await db
        .collection("parts")
        .createIndex({
            functionNo: 1,
        });
    console.log("Indexes created");
}

main().then(() => process.exit(0)).catch(console.error);

// run
// npx tsx scripts/create-indexes.ts