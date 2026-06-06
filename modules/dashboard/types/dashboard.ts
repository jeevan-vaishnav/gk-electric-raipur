// modules/dashboard/types/dashboard.ts

export interface DashboardStats {
    totalParts: number;
    totalSuppliers: number;
    totalFunctions: number;
    totalVariants: number;
}

// export interface RecentPart {
//     _id: string;
//     partNumber: string;
//     partName: string;
//     partTypeCode: string;
//     systemGroupCode: string;
//     supplierCode: string;
//     versionCode: string;
//     active: boolean;
//     createdAt: string;
// }
export interface RecentPart {
    _id: string;
    partNumber: string;
    partName: string;
    partTypeCode: string;
    systemGroupCode: string;
    supplierCode: string;
    versionCode: string;
    active: boolean;
    createdAt: string;
}

export interface SystemDistribution {
    code: string;
    count: number;
}

export interface DashboardResponse {
    stats: DashboardStats;
    recentParts: RecentPart[];
    systemDistribution: SystemDistribution[];
    chartData: {
        day: string;
        parts: number;
    }[];
}