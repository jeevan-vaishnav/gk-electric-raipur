"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import type { Supplier } from "@/types/supplier";

export const supplierColumns: ColumnDef<Supplier>[] = [
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
        header: "Supplier Name",
    },
    {
        accessorKey: "active",
        header: "Status",
        cell: ({ row }) => (
            <Badge>
                {row.original.active
                    ? "Active"
                    : "Inactive"}
            </Badge>
        ),
    },
];