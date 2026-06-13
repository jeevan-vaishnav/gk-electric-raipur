'use client'
import { Icons } from "@/components/icons";
import { DataTable } from "@/components/layout/data-table";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { usePartTypes } from "./hooks/use-part-types";
import { partTypeColumns } from "./components/part-type-columns";
import { useState } from "react";
import { partTypeFormConfig } from "./components/config";
import { MasterDialog } from "@/components/masters/master-dialog";
import type { PartTypeInput } from "@/lib/zod/part-type.schema";
import { useCreatePartType } from "./hooks/use-create-part-type";
import { PageLoader } from "@/components/shared/page-loader";


export function PartTypesModule() {
    const { data = [], isLoading } = usePartTypes();
    const [open, setOpen] = useState(false);

    const createMutation = useCreatePartType();

    const createPartType = (data: PartTypeInput) => {
        createMutation.mutate(data);
        setOpen(false);
    };

    // if (isLoading) {
    //     return <PageLoader />;
    // }

    return (
        <>
            <div className="p-6 space-y-6">
                <PageHeader
                    title="Part Types"
                    description="Manage all part type masters."
                    actions={
                        <Button asChild onClick={() => setOpen(true)}>
                            <Link href={""}>
                                <Icons.PlusSquare className="mr-2 h-4 w-4" />
                                Add Part Type
                            </Link>
                        </Button>
                    }
                />
                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardContent className="p-5 flex items-center gap-4">
                            <Icons.Shapes className="h-8 w-8 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Total Types
                                </p>

                                <p className="text-2xl font-bold">
                                    {data.length}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card><CardContent className="p-5">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Active</div>
                        <div className="text-2xl font-semibold mt-1">{data.length}</div>
                        <div className="text-xs text-primary mt-1">100% utilization</div>
                    </CardContent></Card>
                    <Card><CardContent className="p-5">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Last Updated</div>
                        <div className="text-2xl font-semibold mt-1">Today</div>
                        <div className="text-xs text-muted-foreground mt-1">Synced with parts catalog</div>
                    </CardContent></Card>

                </div>
                <Card>
                    <CardContent className="p-6">
                        <DataTable
                            columns={partTypeColumns}
                            data={data}
                            isLoading={isLoading}
                            searchPlaceholder="Search part types..."
                        />
                    </CardContent>
                </Card>

                <MasterDialog
                    open={open}
                    onOpenChange={setOpen}
                    title="Create Part Type"
                    fields={partTypeFormConfig}
                    onSubmit={createPartType}
                    isSubmitting={createMutation.isPending}

                />
            </div>
        </>

    )
}