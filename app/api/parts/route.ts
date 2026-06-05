import { PartService } from "@/lib/services/part-service";
import { NextResponse } from "next/server";

const service = new PartService();

export async function POST(req: Request) {
    const body = await req.json();
    const result = await service.create(body);
    return NextResponse.json(result);
}

export async function GET(
    req: Request
) {
    const { searchParams } =
        new URL(req.url);

    const search = searchParams.get("search");

    if (search) {
        return NextResponse.json(
            await search.search(search)
        );
    }


    const data = await service.findAll();
    return NextResponse.json(data);
}