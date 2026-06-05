import { getDb } from "../mongodb";
import { Variant } from "@/types/variant";
import { OptionalId } from "mongodb";

export class VariantRepository {
  async create(data: OptionalId<Variant>) {
    const db = await getDb();
    return db.collection<Variant>("variants").insertOne(data);
  }

  async findAll() {
    const db = await getDb();
    return db.collection<Variant>("variants").find({}).sort({ code: 1 }).toArray();
  }

  async findByCode(code: string) {
    const db = await getDb();

    return db.collection<Variant>("variants").findOne({ code });
  }
}