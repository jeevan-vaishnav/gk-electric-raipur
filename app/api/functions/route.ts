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

export async function GET() {
  try {
    const result = await service.findAll();
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