// modules/part-types/components/part-type-columns.tsx

"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { PartType } from "../types/part-type";

export const partTypeColumns: ColumnDef<PartType>[] = [
    {
        accessorKey: "code",
        header: "Code",
        cell: ({ row }) => (
            <Badge variant="outline">
                {row.original.code}
            </Badge>
        ),
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "active",
        header: "Status",
        cell: ({ row }) => (
            <Badge
                variant={row.original.active ? "default" : "secondary"}
            >
                {row.original.active ? "Active" : "Inactive"}
            </Badge>
        ),
    },
];