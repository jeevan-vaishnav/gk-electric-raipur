import { DashboardService } from "@/lib/services/dashboard.service";
import { NextResponse } from "next/server";

const service = new DashboardService();

export async function GET() {
    try {
        const data = await service.getDashboardData();

        return NextResponse.json(data);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Failed to load dashboard" },
            { status: 500 }
        );
    }
}