import { PartRepository } from "../repositories/part.repository";
import { PartSchema } from "../zod/part.schema";
import { PartNumberGeneratorService } from "./part-number-generator.service";

export class PartService {
  private repository = new PartRepository();

  private generator = new PartNumberGeneratorService();

  async create(data: unknown) {
    const validated = PartSchema.parse(data);

    const partNumber =
      this.generator.generate({
        partTypeCode:
          validated.partTypeCode,
        systemGroupCode:
          validated.systemGroupCode,
        functionNo:
          validated.functionNo,
        importCode:
          validated.importCode,
        supplierCode:
          validated.supplierCode,
        variantCode:
          validated.variantCode,
        versionCode:
          validated.versionCode,
      });

    const existing =
      await this.repository.findByPartNumber(
        partNumber
      );

    if (existing) {
      throw new Error(
        "Part number already exists"
      );
    }

    return this.repository.create({
      ...validated,
      partNumber,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(id: string) {
    const part =
      await this.repository.findById(id);

    if (!part) {
      throw new Error(
        "Part not found"
      );
    }

    return part;
  }

  async update(
    id: string,
    data: unknown
  ) {
    const validated =
      PartSchema.parse(data);

    const partNumber =
      this.generator.generate({
        partTypeCode:
          validated.partTypeCode,
        systemGroupCode:
          validated.systemGroupCode,
        functionNo:
          validated.functionNo,
        importCode:
          validated.importCode,
        supplierCode:
          validated.supplierCode,
        variantCode:
          validated.variantCode,
        versionCode:
          validated.versionCode,
      });

    const existing =
      await this.repository.findByPartNumber(
        partNumber
      );

    if (
      existing &&
      existing._id?.toString() !== id
    ) {
      throw new Error(
        "Part number already exists"
      );
    }

    await this.repository.update(id, {
      ...validated,
      partNumber,
    });

    return this.findById(id);
  }

  async delete(id: string) {
    const existing =
      await this.repository.findById(id);

    if (!existing) {
      throw new Error(
        "Part not found"
      );
    }

    return this.repository.delete(id);
  }
  async search(search: string) {
    return this.repository.search(
      search
    );
  }
}