import { ImportIndigenousRepository } from "../repositories/import-indigenous.repository";

import { ImportIndigenousSchema } from "../zod/import-indigenous.schema";

export class ImportIndigenousService {
    private repository = new ImportIndigenousRepository();

    async create(data: unknown) {
        const validated =
            ImportIndigenousSchema.parse(data);

        const existing =
            await this.repository.findByCode(
                validated.code
            );

        if (existing) {
            throw new Error(
                "Code already exists"
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