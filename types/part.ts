import { ObjectId } from "mongodb";

export interface Part {
  _id?: ObjectId;
  partNumber: string;
  partName: string;
  description?: string;
  partTypeCode: string;
  systemGroupCode: string;
  functionNo: number;
  importCode: string;
  supplierCode: string;
  variantCode: string;
  versionCode: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}