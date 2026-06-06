import { useState, type ReactNode } from "react";
import {flexRender, getCoreRowModel, getFilteredRowModel,getPaginationRowModel, getSortedRowModel, useReactTable,type ColumnDef, type SortingState} from "@tanstack/react-table";
import { ArrowUpDown, ChevronLeft, ChevronRight, Search, Inbox } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface Props<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    searchPlaceholder?: string;
    emptyTitle?: string;
    emptyDescription?: string;
    emptyAction?: ReactNode;
    pageSize?: number;
    toolbar?: ReactNode;
    isLoading?: boolean;
}

export function DataTable<TData, TValue>({
    columns,
    data,
    searchPlaceholder = "Search…",
    emptyTitle = "No records found",
    emptyDescription = "Try adjusting filters or create a new record.",
    emptyAction,
    pageSize = 8,
    toolbar,
    isLoading,
}: Props<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [globalFilter, setGlobalFilter] = useState("");

    const table = useReactTable({
        data,
        columns,
        state: { sorting, globalFilter },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: { pagination: { pageSize } },
    });

    const totalRows = table.getFilteredRowModel().rows.length;

    return (
        <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
                <div className="relative flex-1 min-w-[240px] max-w-sm">
                    <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder={searchPlaceholder}
                        value={globalFilter}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        className="pl-9 h-9 bg-background"
                    />
                </div>
                <div className="ml-auto flex items-center gap-2">{toolbar}</div>
            </div>

            <div className="rounded-lg border bg-card overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-muted/50">
                            {table.getHeaderGroups().map((hg) => (
                                <TableRow key={hg.id} className="hover:bg-transparent">
                                    {hg.headers.map((header) => {
                                        const canSort = header.column.getCanSort();
                                        return (
                                            <TableHead
                                                key={header.id}
                                                className={cn(
                                                    "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                                                    canSort && "cursor-pointer select-none",
                                                )}
                                                onClick={canSort ? header.column.getToggleSortingHandler() : undefined}
                                            >
                                                <div className="flex items-center gap-1.5">
                                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                                    {canSort && <ArrowUpDown className="h-3 w-3 opacity-50" />}
                                                </div>
                                            </TableHead>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {isLoading ? (
                                Array.from({ length: 5 }).map((_, i) => (
                                    <TableRow key={i}>
                                        {columns.map((_c, j) => (
                                            <TableCell key={j}>
                                                <div className="h-4 bg-muted rounded animate-pulse" />
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : table.getRowModel().rows.length === 0 ? (
                                <TableRow className="hover:bg-transparent">
                                    <TableCell colSpan={columns.length} className="h-48 text-center">
                                        <div className="flex flex-col items-center gap-2 text-muted-foreground">
                                            <Inbox className="h-8 w-8 opacity-40" />
                                            <div className="font-medium text-foreground">{emptyTitle}</div>
                                            <div className="text-xs">{emptyDescription}</div>
                                            {emptyAction && <div className="mt-2">{emptyAction}</div>}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow key={row.id} className="hover:bg-muted/40">
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id} className="py-2.5">
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {totalRows > 0 && (
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div>
                        Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}
                        –{Math.min((table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize, totalRows)} of {totalRows}
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                            className="h-8"
                        >
                            <ChevronLeft className="h-3.5 w-3.5" /> Prev
                        </Button>
                        <span className="px-2">
                            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                        </span>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                            className="h-8"
                        >
                            Next <ChevronRight className="h-3.5 w-3.5" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
