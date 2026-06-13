import 'server-only';

import { FunctionMaster } from "@/types/function";
import { getDb } from "../mongodb";
import { FunctionFilters } from "@/features/functions/api/types";

export class FunctionRepository {
    async create(data: FunctionMaster) {
        const db = await getDb();
        return db.collection<FunctionMaster>("functions").insertOne(data)
    }

    async findAll(filters: FunctionFilters) {
        console.log("Repository HIT");
        const db = await getDb();
        const query: Record<string, any> = {};
        const page = Number(filters.page ?? 1);
        const limit = Number(filters.limit ?? 10);

        const skip = (page - 1) * limit;

        if (filters.functionNo) {
            query.functionNo = filters.functionNo;
        }

        if (filters.groupCode) {
            query.groupCode = filters.groupCode;
        }

        if (filters.search) {
            query.name = {
                $regex: filters.search,
                $options: "i",
            };
        }
        const data = await db.collection<FunctionMaster>("functions").find(query).skip(skip).limit(limit).toArray()
        
        return await data.map(item => ({
            ...item,
            _id: item._id?.toString(),
            createdAt: item.createdAt?.toISOString(),
            updatedAt: item.updatedAt?.toISOString(),
        }));
    }

    async findByFuntionNo(functionNo: string) {
        const db = await getDb();
        return db.collection<FunctionMaster>("functions").findOne({ functionNo })
    }

    async findByGroupCode(groupCode: string) {
        const db = await getDb();
        return db.collection<FunctionMaster>("functions").find({ groupCode }).toArray()
    }
}