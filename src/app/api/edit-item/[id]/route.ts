import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { name, description, price, category, quantity } = await req.json();
  await prisma.menu.update({
    where: {
      id: id,
    },
    data: {
      name,
      description,
      price,
      category,
      quantity,
    },
  });

  return NextResponse.json(
    { message: `Item ${name} alterado` },
    { status: 200 }
  );
}
