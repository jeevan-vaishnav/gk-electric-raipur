import { getDb } from "../mongodb";
import { Part } from "@/types/part";
import { ObjectId, OptionalId } from "mongodb";

export class PartRepository {

    async create(data: OptionalId<Part>) {
        const db = await getDb();
        return db.collection<Part>("parts").insertOne(data);
    }

    async findAll() {
        const db = await getDb();

        return db.collection<Part>("parts").find({}).toArray();
    }

    async findByPartNumber(partNumber: string
    ) {
        const db = await getDb();
        return db.collection<Part>("parts").findOne({ partNumber });
    }

    async findById(id: string) {
        const db = await getDb();

        return db.collection<Part>("parts").findOne({
            _id: new ObjectId(id),
        });
    }

    async update(id: string, data: Partial<Part>
    ) {
        const db = await getDb();

        return db
            .collection<Part>("parts").updateOne(
                {
                    _id: new ObjectId(id),
                },
                {
                    $set: {
                        ...data,
                        updatedAt: new Date(),
                    },
                }
            );
    }

    async delete(id: string) {
        const db = await getDb();

        return db
            .collection<Part>("parts").deleteOne({
                _id: new ObjectId(id),
            });
    }

    async search(search: string) {
        const db = await getDb();
        return db
            .collection<Part>("parts")
            .find({
                $or: [
                    {
                        partNumber: {
                            $regex: search,
                            $options: "i",
                        },
                    },
                    {
                        partName: {
                            $regex: search,
                            $options: "i",
                        },
                    },
                ],
            })
            .toArray();
    }
}