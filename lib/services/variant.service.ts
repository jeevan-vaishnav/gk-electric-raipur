import { VariantRepository } from "../repositories/variant.repository";

import { VariantSchema } from "../zod/variant.schema";

export class VariantService {
  private repository = new VariantRepository();

  async create(data: unknown) {
    const validated = VariantSchema.parse(data);

    const existing =
      await this.repository.findByCode(
        validated.code
      );

    if (existing) {
      throw new Error(
        "Variant code already exists"
      );
    }

    return this.repository.create({
      ...validated,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  async findAll() {
    return this.repository.findAll();
  }
}