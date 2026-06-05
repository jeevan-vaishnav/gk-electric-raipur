import { getDb } from "../mongodb";
import { ImportIndigenous } from "@/types/import-indigenous";
import { OptionalId } from "mongodb";

export class ImportIndigenousRepository {
  
    async create(data: OptionalId<ImportIndigenous>) {
    const db = await getDb();

    return db.collection<ImportIndigenous>("importIndigenous").insertOne(data);
  }

  async findAll() {
    const db = await getDb();

    return db.collection<ImportIndigenous>("importIndigenous").find({}).toArray();
  }

  async findByCode(code: string) {
    const db = await getDb();

    return db
      .collection<ImportIndigenous>(
        "importIndigenous"
      )
      .findOne({ code });
  }
}