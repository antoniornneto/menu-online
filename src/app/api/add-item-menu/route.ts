import { prisma } from "@/lib/prisma";
import { ItemProp } from "@/lib/type";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { category, name, description, price, stock }: ItemProp =
    await req.json();

  await prisma.menu.create({
    data: {
      category,
      name,
      description,
      price,
      stock,
      image: "/",
    },
  });

  return NextResponse.json({ message: "Item adicionado" });
}
