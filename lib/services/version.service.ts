import { VersionRepository }
  from "../repositories/version.repository";

import { VersionSchema }
  from "../zod/version.schema";

export class VersionService {
  private repository = new VersionRepository();

  async create(data: unknown) {
    
    const validated = VersionSchema.parse(data);
    const existing = await this.repository.findByCode(validated.code);

    if (existing) {
      throw new Error(
        "Version code already exists"
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