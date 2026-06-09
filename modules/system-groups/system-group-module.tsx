'use client'
import { Icons } from "@/components/icons";
import { DataTable } from "@/components/layout/data-table";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useSystemGroup } from "./hooks/use_group-system";
import { useState } from "react";
import { systemGroupFormConfig } from "./components/config";
import { MasterDialog } from "@/components/masters/master-dialog";
import { useCreateSystemGroup } from "./hooks/use-create-system-group";
import { SystemGroupInput } from "@/lib/zod/system-group.schema";
import { systemGroupColumns } from "./components/system-group-columns";


export function SystemGroupModule() {
    const { data = [], isLoading } = useSystemGroup();
    const [open, setOpen] = useState(false);

    const createMutation = useCreateSystemGroup();

    const createSystemGroup = (data: SystemGroupInput) => {
        createMutation.mutate(data);
        setOpen(false);
    };


    return (
        <>
            <div className="p-6 space-y-6">
                <PageHeader
                    title="System Group"
                    description="Manage all system group masters."
                    actions={
                        <Button asChild onClick={() => setOpen(true)}>
                            <Link href={""}>
                                <Icons.PlusSquare className="mr-2 h-4 w-4" />
                                Add System Group
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
                            columns={systemGroupColumns}
                            data={data}
                            isLoading={isLoading}
                            searchPlaceholder="Search part types..."
                        />
                    </CardContent>
                </Card>

                <MasterDialog
                    open={open}
                    onOpenChange={setOpen}
                    title="Create System Group"
                    fields={systemGroupFormConfig}
                    onSubmit={createSystemGroup}
                    isSubmitting={createMutation.isPending}

                />
            </div>
        </>

    )
}