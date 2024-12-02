import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE({ params }: { params: { id: string } }) {
  const { id } = await params;
  await prisma.menu.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json({ message: "Item deletado" }, { status: 200 });
}
