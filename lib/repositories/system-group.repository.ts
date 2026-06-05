
import { SystemGroup } from "@/types/system_group";
import { getDb } from "../mongodb";
import { OptionalId } from "mongodb";

export class SystemGroupRepository {
    async create(data: OptionalId<SystemGroup>) {
        const db = await getDb();

        return db
            .collection<SystemGroup>("systemGroups")
            .insertOne(data);
    }
    
    async findByCode(code: string) {
        const db = await getDb();
        return db.collection<SystemGroup>("systemGroups").findOne({ code });
    }

    async findAll() {
        const db = await getDb();
        return db.collection<SystemGroup>("systemGroups").find({}).toArray();
    }
}