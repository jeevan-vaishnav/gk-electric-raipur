"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { StatCard } from "./components/stat-card";
import { Card, CardContent } from "@/components/ui/card";
import { DashboardResponse, SystemDistribution } from "./types/dashboard";
import { DataTable } from "@/components/layout/data-table";
import { columns } from "./components/columns";

export function DashboardModule() {

    const { data, isLoading } = useQuery<DashboardResponse>({
        queryKey: ["dashboard"],
        queryFn: async () => {
            const res = await fetch("/api/dashboard");
            if (!res.ok) {
                throw new Error("Failed to fetch dashboard");
            }
            return res.json();
        },
    })



    return (
        <div className="p-6">
            <PageHeader
                title="Dashboard"
                description="Manufacturing overview"
                actions={
                    <Button asChild>
                        <Link href="/parts/create">
                            <Icons.PlusSquare className="mr-2 h-4 w-4" />
                            Create Part
                        </Link>
                    </Button>
                }
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 mb-6 gap-4">
                <StatCard
                    label="Total Parts"
                    value={data?.stats.totalParts ?? 0}
                    icon={Icons.Boxes}
                />
                <StatCard
                    label="Suppliers"
                    value={data?.stats.totalSuppliers ?? 0}
                    icon={Icons.Factory}
                />
                <StatCard
                    label="Functions"
                    value={data?.stats.totalFunctions ?? 0}

                    icon={Icons.Wrench}
                />

                <StatCard
                    label="Variants"
                    value={data?.stats.totalVariants ?? 0}
                    icon={Icons.Tag}
                />
            </div>
            <div className="grid gap-4 lg:grid-cols-3 mb-6">
                <Card className="lg:col-span-2">
                    <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">
                            Parts Created Last 7 Days
                        </h3>

                        <div className="h-72">
                            <ResponsiveContainer
                                width="100%"
                                height="100%"
                            >
                                <AreaChart
                                    data={data?.chartData ?? []}
                                >
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                    />

                                    <XAxis dataKey="day" />
                                    <YAxis />

                                    <Tooltip />

                                    <Area
                                        type="monotone"
                                        dataKey="parts"
                                        stroke="currentColor"
                                        fillOpacity={0.2}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">
                            System Distribution
                        </h3>

                        <div className="space-y-4">
                            {data?.systemDistribution?.map((item: SystemDistribution) => {
                                const percentage = data.stats.totalParts > 0
                                    ? Math.round(
                                        (item.count / data.stats.totalParts) * 100
                                    )
                                    : 0;

                                return (
                                    <div key={item.code}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>{item.code}</span>
                                            <span>{item.count}</span>
                                        </div>

                                        <div className="h-2 bg-muted rounded overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${percentage}%` }}
                                                transition={{ duration: 0.5 }}
                                                className="h-full bg-primary rounded"
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">
                            Recent Parts
                        </h3>

                        <Button
                            asChild
                            variant="ghost"
                        >
                            <Link href="/parts">
                                View All
                                <Icons.ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    <DataTable
                        columns={columns}
                        data={data?.recentParts ?? []}
                        isLoading={isLoading}
                        pageSize={6}
                        searchPlaceholder="Search Parts..."
                        emptyTitle="No Parts Found"
                        emptyDescription="Create your first part."
                    />
                </CardContent>
            </Card>
        </div>
    )
}