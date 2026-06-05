export interface Version {
  _id?: string;
  code: string;
  stage: string;
  description: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}