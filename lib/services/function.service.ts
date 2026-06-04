import { FunctionRepository } from "../repositories/function.repository";
import { FunctionSchema } from "../zod/function.schema";
import { FunctionMaster } from "@/types/function";


export class FunctionService {
    private repository  = new FunctionRepository()

    async create(data:FunctionMaster){

        const validated =  FunctionSchema.parse(data);
        const exiting = await this.repository.findByFuntionNo(validated.functionNo);
        
        if(exiting){
            throw new Error("Funtion number already exists")
        }

        const functionMaster: FunctionMaster = {
        ...validated,
        createdAt: new Date(),
        updatedAt: new Date(),
        };
        
        return this.repository.create(functionMaster);
    }
    async findAll(){
        return this.repository.findAll();
    }
}