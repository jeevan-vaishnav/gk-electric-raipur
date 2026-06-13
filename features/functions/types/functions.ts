// modules/part-types/types/part-type.ts

import { ObjectId } from "mongodb";

export interface FunctionType {
    _id?: ObjectId;
    functionNo: string;
    groupName:string;
    groupCode: string;
    name: string;
    description?: string;
    active: boolean;
}

export const functionFields = [
    {
        name: "functionNo",
        label: "Function Number",
        type: "text" as const,
        placeholder: "1",
    },
    {
        name: "groupName",
        label: "Group Name",
        type: "text" as const,
        placeholder: "Battery System",
    },
    {
        name: "groupCode",
        label: "Group Code",
        type: "text" as const,
        placeholder: "BAT",
    },
    {
        name: "name",
        label: "Function Name",
        type: "text" as const,
        placeholder: "Battery Management",
    },
    {
        name: "description",
        label: "Description",
        type: "textarea" as const,
        placeholder: "Enter function description",
    },
];