import { PartType } from "@/types/part-type";
import { getDb } from "../mongodb";

export class PartTypeRepository {
  
    async create(data: PartType) {
    const db = await getDb();

    return db
      .collection<PartType>("partTypes")
      .insertOne(data);
  }

  async findAll() {
    const db = await getDb();

    return db
      .collection<PartType>("partTypes")
      .find({})
      .toArray();
  }

  async findByCode(code: string) {
    const db = await getDb();

    return db
      .collection<PartType>("partTypes")
      .findOne({ code });
  }
}