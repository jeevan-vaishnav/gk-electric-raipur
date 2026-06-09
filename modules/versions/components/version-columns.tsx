"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import type { Version } from "@/types/version";

export const versionColumns: ColumnDef<Version>[] = [
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
        accessorKey: "stage",
        header: "Stage",
    },
    {
        accessorKey: "description",
        header: "Description",
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