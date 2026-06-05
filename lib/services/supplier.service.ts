import { SupplierRepository } from "../repositories/supplier.repository";

import { SupplierSchema } from "../zod/supplier.schema";

export class SupplierService {delete(id: string) {
      throw new Error("Method not implemented.");
  }
  update(id: string, body: any) {
      throw new Error("Method not implemented.");
  }

  
  private repository = new SupplierRepository();

  async create(data: unknown) {
    const validated = SupplierSchema.parse(data);

    const existing =
      await this.repository.findByCode(
        validated.code
      );

    if (existing) {
      throw new Error(
        "Supplier code already exists"
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