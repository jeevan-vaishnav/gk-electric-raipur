import { FormField } from "@/components/forms/dynamic-form";

export const functionFormConfig  : FormField[]= [
    {
        name: "functionNo",
        label: "Function Number",
        type: "text" as const,
        placeholder: "1",
    },
    {
        name: "groupCode",
        label: "Group Code",
        type: "text" as const,
        placeholder: "BAT",
    },
    {
        name: "groupName",
        label: "Group Name",
        type: "text" as const,
        placeholder: "Battery System",
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
        placeholder: "Enter description",
    },
];