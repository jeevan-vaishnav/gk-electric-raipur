import 'server-only';
import { FunctionFilters } from "@/features/functions/api/types";
import { FunctionRepository } from "../repositories/function.repository";
import { FunctionSchema } from "../zod/function.schema";
import { FunctionMaster } from "@/types/function";


export class FunctionService {
    private repository = new FunctionRepository()

    async create(data: FunctionMaster) {
        console.log("Service HIT");

        const validated = FunctionSchema.parse(data);
        const exiting = await this.repository.findByFuntionNo(validated.functionNo);

        if (exiting) {
            throw new Error("Funtion number already exists")
        }

        const functionMaster: FunctionMaster = {
            ...validated,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        return this.repository.create(functionMaster);
    }
    async findAll(filters: FunctionFilters) {
        return this.repository.findAll(filters);
    }
}