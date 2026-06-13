'use client'
import PageContainer from '@/components/layout/page-container';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardFooter } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import React from 'react';
import { StatCard } from '@/features/overview/components/stat-card';
import { DashboardResponse } from '@/features/overview/types/dashboard';
import { useQuery } from '@tanstack/react-query';

export default function OverViewLayout({ bar_stats }: {
    // sales: React.ReactNode;
    // pie_stats: React.ReactNode;
    bar_stats: React.ReactNode;
    // area_stats: React.ReactNode;
}) {

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
        <PageContainer>
            <div className='flex flex-1 flex-col space-y-2'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-2xl font-bold tracking-tight'>Hi, Welcome back</h2>
                </div>
                <div
                    className='*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 
                gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs md:grid-cols-2 lg:grid-cols-4'
                >
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
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7'>
                    <div className='col-span-4'>{bar_stats}</div>
                    <div className='col-span-4 md:col-span-3'>
                        {/* sales arallel routes */}
                        {/* {sales} */}
                    </div>
                    {/* <div className='col-span-4'>{area_stats}</div> */}
                    {/* <div className='col-span-4 min-h-0 md:col-span-3'>{pie_stats}</div> */}
                </div>
            </div>
        </PageContainer>
    )
}