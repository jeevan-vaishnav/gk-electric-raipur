// 'use client'
// import { Icons } from "@/components/icons";
// import { DataTable } from "@/components/layout/data-table";
// import { PageHeader } from "@/components/layout/page-header";
// import { Button, buttonVariants } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import Link from "next/link";
// import { useState } from "react";
// import { functionFormConfig } from "./components/config";
// import { MasterDialog } from "@/components/masters/master-dialog";
// import { useCreateFunctions } from "./hooks/use-functions-hooks";
// // import { PageLoader } from "@/components/shared/page-loader";
// import { functionColumns } from "./components/functions-columns"
// import type { FunctionInput } from "@/lib/zod/function.schema";
// import { useFunctions } from "./hooks/use-functions";
// import PageContainer from "@/components/layout/page-container";
// import { cn } from "@/lib/utils";

// export function FunctionsModule() {
//     const { data = [], isLoading } = useFunctions();
//     const [open, setOpen] = useState(false);

//     const createMutation = useCreateFunctions();

//     const createFunctionsType = (data: FunctionInput) => {
//         createMutation.mutate(data);
//         setOpen(false);
//     };

//     // if (isLoading) {
//     //     return <PageLoader />;
//     // }

//     return (
//         <PageContainer
//             pageTitle="Functions"
//             pageDescription="Create Functions"
//             // infoContent={funtionInfoContent}
//             pageHeaderAction={
//                 <Button asChild onClick={() => setOpen(true)}>
//                     <Link href={""} className={cn(buttonVariants(), 'text-xs md:text-sm')}>
//                         <Icons.PlusSquare className="mr-2 h-4 w-4" />
//                         Add Functions
//                     </Link>
//                 </Button>
//             }
//         >
//             <div className="space-y-5">
//                 <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
//                     <Card>
//                         <CardContent className="p-5 flex items-center gap-4">
//                             <Icons.Shapes className="h-8 w-8 text-primary" />
//                             <div>
//                                 <p className="text-sm text-muted-foreground">
//                                     Total Functions
//                                 </p>

//                                 <p className="text-2xl font-bold">
//                                     {data.length}
//                                 </p>
//                             </div>
//                         </CardContent>
//                     </Card>
//                     <Card><CardContent className="p-5">
//                         <div className="text-xs text-muted-foreground uppercase tracking-wider">Active</div>
//                         <div className="text-2xl font-semibold mt-1">{data.length}</div>
//                         <div className="text-xs text-primary mt-1">100% utilization</div>
//                     </CardContent></Card>
//                     <Card><CardContent className="p-5">
//                         <div className="text-xs text-muted-foreground uppercase tracking-wider">Last Updated</div>
//                         <div className="text-2xl font-semibold mt-1">Today</div>
//                         <div className="text-xs text-muted-foreground mt-1">Synced with funtion catalog</div>
//                     </CardContent></Card>
//                 </div>
//                 <Card>
//                     <CardContent className="p-6">
//                         <DataTable
//                             columns={functionColumns}
//                             data={data}
//                             isLoading={isLoading}
//                             searchPlaceholder="Search funtion number..."
//                         />
//                     </CardContent>
//                 </Card>
//             </div>
//             <MasterDialog
//                 open={open}
//                 onOpenChange={setOpen}
//                 title="Create Functions"
//                 fields={functionFormConfig}
//                 onSubmit={createFunctionsType}
//                 isSubmitting={createMutation.isPending}
//             />
//         </PageContainer>
//     )
// }