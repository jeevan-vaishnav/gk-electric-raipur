"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { FunctionType } from "../types/functions";

export const functionColumns: ColumnDef<FunctionType>[] = [
    {
        accessorKey: "functionNo",
        header: "Function No",
    },
    {
        accessorKey: "groupCode",
        header: "Group Code",
        cell: ({ row }) => (
            <Badge variant="outline">
                {row.original.groupCode}
            </Badge>
        ),
    },
    {
        accessorKey: "groupName",
        header: "Group Name",
    },
    {
        accessorKey: "name",
        header: "Function Name",
    },
    {
        accessorKey: "active",
        header: "Status",
        cell: ({ row }) => (
            <Badge
                variant={
                    row.original.active
                        ? "default"
                        : "secondary"
                }
            >
                {row.original.active
                    ? "Active"
                    : "Inactive"}
            </Badge>
        ),
    },
];