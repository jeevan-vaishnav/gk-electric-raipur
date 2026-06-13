import { FunctionService } from "@/lib/services/function.service";
import { NextResponse } from "next/server";

const service = new FunctionService();

export async function POST(req: Request) {

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
            : "Something went wrong",
      },
      { status: 400 }
    );
  }
}

export async function GET(req: Request) {
  console.log("calling")
  try {
    console.log("API HIT");
    const { searchParams } = new URL(req.url);

    const filters = {
      page: searchParams.get("page") ? Number(searchParams.get('page')) : undefined,
      limit: searchParams.get("limit") ? Number(searchParams.get("limit")) : undefined,
      search: searchParams.get("name") ?? undefined,
      functionNo: searchParams.get("functionNo") ?? undefined,
      groupCode: searchParams.get("groupCode") ?? undefined,
      sort: searchParams.get("sort") ?? undefined,
    };
    const result = await service.findAll(filters);
    return NextResponse.json(result);

  } catch {
    return NextResponse.json(
      {
        message:
          "Failed to fetch functions",
      },
      { status: 500 }
    );
  }
}