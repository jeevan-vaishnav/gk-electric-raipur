import { ObjectId } from "mongodb";

export interface PartType {
  _id?: ObjectId;
  code: string;
  name: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}