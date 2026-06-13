"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import type { Variant } from "@/types/variant";

export const variantColumns: ColumnDef<Variant>[] = [
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
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "value",
        header: "Value",
    },
    {
        accessorKey: "useCase",
        header: "Use Case",
        cell: ({ row }) => (
            <span>
                {row.original.useCase || "-"}
            </span>
        ),
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