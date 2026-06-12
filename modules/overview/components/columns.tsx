import { type ColumnDef } from "@tanstack/react-table";
import type { RecentPart } from "@/modules/overview/types/dashboard";
import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export const columns: ColumnDef<RecentPart>[] = [
    {
        accessorKey: "partNumber",
        header: "Part Number",
        cell: ({ row }) => (
            <span className="font-mono font-semibold text-primary">
                {row.original.partNumber}
            </span>
        ),
    },
    {
        accessorKey: "partName",
        header: "Part Name",
    },
    {
        accessorKey: "partTypeCode",
        header: "Type",
        cell: ({ row }) => (
            <Badge variant="outline">
                {row.original.partTypeCode}
            </Badge>
        ),
    },
    {
        accessorKey: "systemGroupCode",
        header: "System",
    },
    {
        accessorKey: "supplierCode",
        header: "Supplier",
    },
    {
        accessorKey: "active",
        header: "Status",
        cell: ({ row }) => (
            <Badge
                variant="secondary"
                className="bg-primary/15 text-primary"
            >
                {row.original.active ? "Active" : "Inactive"}
            </Badge>
        ),
    },
    {
        accessorKey: "createdAt",
        header: "Created",
        cell: ({ row }) =>
            format(
                new Date(row.original.createdAt), "dd MMM yyyy"
            ),
    }
]