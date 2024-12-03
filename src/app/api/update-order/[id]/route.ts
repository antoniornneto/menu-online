import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const order = await prisma.order.update({
    where: {
      id: parseInt(id),
    },
    data: {
      finished: true,
    },
  });
  console.log(id);
  console.log(order);
  return NextResponse.json({ order });
}
