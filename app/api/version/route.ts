import { NextResponse } from "next/server";
import { VersionService } from "@/lib/services/version.service";

const service = new VersionService();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const result = await service.create(body);
    console.log(result)
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
  const data = await service.findAll();
  return NextResponse.json(data);
}