// modules/part-types/types/part-type.ts

export interface PartType {
    _id: string;
    code: string;
    name: string;
    active: boolean;
    createdAt: string;
}

export const partTypeFields = [
  {
    name: "code",
    label: "Code",
    placeholder: "A",
  },
  {
    name: "name",
    label: "Name",
    placeholder: "Assembly",
  },
];