import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await prisma.menu.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json({ message: "Item deletado" }, { status: 200 });
}
