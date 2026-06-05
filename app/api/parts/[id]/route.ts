import { PartService } from "@/lib/services/part-service";

const service = new PartService();


export async function PUT(req: Request,{ params }: {params: Promise<{ id: string }>}) {
  const { id } = await params;
  const body = await req.json();
  const result = await service.update(id,body);
  return Response.json(result);
}

export async function DELETE(req: Request,{ params }: {params: Promise<{ id: string }>}
) {

  const { id } = await params;

  await service.delete(id);

  return Response.json({
    success: true
  });
}