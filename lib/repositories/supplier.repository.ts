import { getDb } from "../mongodb";
import { Supplier } from "@/types/supplier";
import { OptionalId } from "mongodb";

export class SupplierRepository {
    async create(data: OptionalId<Supplier>) {
        const db = await getDb();
        return db.collection<Supplier>("suppliers").insertOne(data);
    }

    async findAll() {
        const db = await getDb();
        return db.collection<Supplier>("suppliers").find({}).toArray();
    }

    async findByCode(code: string) {
        const db = await getDb();
        return db.collection<Supplier>("suppliers").findOne({ code });
    }
}