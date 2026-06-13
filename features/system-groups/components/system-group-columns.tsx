"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { SystemGroup } from "@/types/system_group";

export const systemGroupColumns: ColumnDef<SystemGroup>[] = [
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
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => (
            <span className="max-w-xs truncate">
                {row.original.description}
            </span>
        ),
    },
    {
        accessorKey: "active",
        header: "Status",
        cell: ({ row }) => (
            <Badge variant={row.original.active ? "default" : "secondary"}>
                {row.original.active ? "Active" : "Inactive"}
            </Badge>
        ),
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({ row }) =>
            new Date(row.original.createdAt).toLocaleDateString(),
    },
    {
        accessorKey: "updatedAt",
        header: "Updated At",
        cell: ({ row }) =>
            new Date(row.original.updatedAt).toLocaleDateString(),
    },
];