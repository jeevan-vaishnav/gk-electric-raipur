export interface Variant {
  _id?: string;
  code: string;
  category: string;
  value: string;
  useCase?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}