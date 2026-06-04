import { FunctionMaster } from "@/types/function";
import { getDb } from "../mongodb";

export class FunctionRepository {

    async create(data:FunctionMaster){
        const db = await getDb();
        return db.collection<FunctionMaster>("functions").insertOne(data)
    }

    async findAll(){
        const db = await getDb();
        return db.collection<FunctionMaster>("functions").find({}).toArray()
    }

    async findByFuntionNo(functionNo:number){
        const db = await getDb();
        return db.collection<FunctionMaster>("functions").findOne({functionNo}) 
    }

    async findByGroupCode(groupCode:string){
        const db = await getDb();
        return db.collection<FunctionMaster>("functions").find({groupCode}).toArray()
    }
}