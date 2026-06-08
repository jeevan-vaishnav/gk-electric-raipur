
import { NextResponse } from "next/server";
import { PartTypeService } from "@/lib/services/part-type.service";

const service = new PartTypeService();

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
            : "Error",
      },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    const result = await service.findAll();
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json({
      message: error instanceof Error ? error.message : "Error"
    },
      { status: 400 }
    )
  }
}
