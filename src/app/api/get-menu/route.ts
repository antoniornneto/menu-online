import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const menu = await prisma.menu.findMany();

  return NextResponse.json({ menu });
}
