import { ObjectId } from "mongodb";

export interface FunctionMaster {
    _id?: ObjectId;
    functionNo: number;
    groupName:string;
    groupCode: string;
    name: string;
    description?: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}
