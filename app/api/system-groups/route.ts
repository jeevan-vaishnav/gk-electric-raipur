import { NextResponse } from "next/server";
import { SystemGroupService } from "@/lib/services/system-group.service";

const service = new SystemGroupService();

export async function POST(
    req: Request
) {
    try {
        const body = await req.json();

        const result = await service.create(body);

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json(
            {
                message:
                    error instanceof Error
                        ? error.message
                        : "Error",
            },
            {
                status: 400,
            }
        );
    }
}

export async function GET() {
    try {
        const data = await service.findAll();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            {
                message:
                    error instanceof Error
                        ? error.message
                        : "Error",
            },
            {
                status: 500,
            }
        );
    }
}