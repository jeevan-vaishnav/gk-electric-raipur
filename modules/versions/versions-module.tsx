'use client'

import { useState } from "react";

import { Icons } from "@/components/icons";
import { DataTable } from "@/components/layout/data-table";
import { PageHeader } from "@/components/layout/page-header";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { MasterDialog } from "@/components/masters/master-dialog";

import { useVersions } from "./hooks/use-versions";
import { useCreateVersion } from "./hooks/use-create-version";

import { versionColumns } from "./components/version-columns";
import { versionFormConfig } from "./components/config";

import type { VersionInput } from "@/lib/zod/version.schema";

export function VersionsModule() {
    const [open, setOpen] = useState(false);

    const { data = [], isLoading } = useVersions();

    const createMutation = useCreateVersion();

    const createVersion = (data: VersionInput) => {
        createMutation.mutate(data, {
            onSuccess: () => {
                setOpen(false);
            },
        });
    };

    return (
        <div className="p-6 space-y-6">
            <PageHeader
                title="Versions"
                description="Manage all versions."
                actions={
                    <Button onClick={() => setOpen(true)}>
                        <Icons.PlusSquare className="mr-2 h-4 w-4" />
                        Add Version
                    </Button>
                }
            />

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardContent className="p-5 flex items-center gap-4">
                        <Icons.GitBranch className="h-8 w-8 text-primary" />
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total Versions
                            </p>

                            <p className="text-2xl font-bold">
                                {data.length}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-5">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">
                            Active
                        </div>

                        <div className="text-2xl font-semibold mt-1">
                            {data.length}
                        </div>

                        <div className="text-xs text-primary mt-1">
                            100% utilization
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-5">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">
                            Last Updated
                        </div>

                        <div className="text-2xl font-semibold mt-1">
                            Today
                        </div>

                        <div className="text-xs text-muted-foreground mt-1">
                            Synced with parts catalog
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardContent className="p-6">
                    <DataTable
                        columns={versionColumns}
                        data={data}
                        isLoading={isLoading}
                        searchPlaceholder="Search versions..."
                    />
                </CardContent>
            </Card>

            <MasterDialog
                open={open}
                onOpenChange={setOpen}
                title="Create Version"
                fields={versionFormConfig}
                onSubmit={createVersion}
                isSubmitting={createMutation.isPending}
            />
        </div>
    );
}