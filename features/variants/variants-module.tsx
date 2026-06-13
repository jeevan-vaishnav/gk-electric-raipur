'use client'
import { Icons } from "@/components/icons";
import { DataTable } from "@/components/layout/data-table";
import { PageHeader } from "@/components/layout/page-header";
import { MasterDialog } from "@/components/masters/master-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { VariantInput } from "@/lib/zod/variant.schema";
import { useState } from "react";
import { variantFormConfig } from "./components/config";
import { variantColumns } from "./components/variant-columns";
import { useCreateVariant } from "./hooks/use-create-variant";
import { useVariants } from "./hooks/use-variants";

export function VariantsModule() {
    const [open, setOpen] = useState(false);

    const { data = [], isLoading } = useVariants();

    const createMutation = useCreateVariant();

    const createVariant = (data: VariantInput) => {
        createMutation.mutate(data, {
            onSuccess: () => {
                setOpen(false);
            },
        });
    };

    return (
        <div className="p-6 space-y-6">
            <PageHeader
                title="Variants"
                description="Manage all variants."
                actions={
                    <Button onClick={() => setOpen(true)}>
                        <Icons.PlusSquare className="mr-2 h-4 w-4" />
                        Add Variant
                    </Button>
                }
            />

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardContent className="p-5 flex items-center gap-4">
                        <Icons.Tag className="h-8 w-8 text-primary" />

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total Variants
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

                {/* Remaining cards same as other modules */}
            </div>

            <Card>
                <CardContent className="p-6">
                    <DataTable
                        columns={variantColumns}
                        data={data}
                        isLoading={isLoading}
                        searchPlaceholder="Search variants..."
                    />
                </CardContent>
            </Card>

            <MasterDialog
                open={open}
                onOpenChange={setOpen}
                title="Create Variant"
                fields={variantFormConfig}
                onSubmit={createVariant}
                isSubmitting={createMutation.isPending}
            />
        </div>
    );
}