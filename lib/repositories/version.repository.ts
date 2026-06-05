import { getDb } from "../mongodb";
import { Version } from "@/types/version";
import { OptionalId } from "mongodb";

export class VersionRepository {

  async create(data: OptionalId<Version>) {
    const db = await getDb();
    return db.collection<Version>("versions").insertOne(data);
  }

  async findAll() {
    const db = await getDb();
    return db.collection<Version>("versions").find({}).sort({ code: 1 }).toArray();
  }

  async findByCode(code: string) {
    const db = await getDb();
    return db.collection<Version>("versions").findOne({ code });
  }
}