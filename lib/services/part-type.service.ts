import { PartType } from "@/types/part-type";
import { PartTypeRepository } from "../repositories/part-type.repository";
import { PartTypeSchema } from "../zod/part-type.schema";

export class PartTypeService {

  private repository = new PartTypeRepository();

  async create(data: unknown) {

    const validated = PartTypeSchema.parse(data);

    const existing = await this.repository.findByCode(
      validated.code
    );

    if (existing) {
      throw new Error(
        "Part type code already exists"
      );
    }

    const partType: PartType = {
      ...validated,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    return this.repository.create(partType);
  }

  async findAll() {
    return this.repository.findAll()
  }

}