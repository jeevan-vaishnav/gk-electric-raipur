import { SystemGroupRepository } from "../repositories/system-group.repository";
import { SystemGroupSchema } from "../zod/system-group.schema";

export class SystemGroupService {
    private repository = new SystemGroupRepository();

    async create(data: unknown) {
        
        const validated = SystemGroupSchema.parse(data);
        const existing = await this.repository.findByCode(validated.code);

        if (existing) {throw new Error("System group code already exists")}

        return this.repository.create({
            ...validated,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }

    async findAll() { return this.repository.findAll()}
}