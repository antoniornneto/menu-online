import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const item = await prisma.menu.findUnique({
    where: {
      id: id,
    },
  });

  return NextResponse.json({ item }, { status: 200 });
}
