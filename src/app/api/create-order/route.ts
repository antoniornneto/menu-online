// import { prisma } from "@/lib/prisma";
import { prisma } from "@/lib/prisma";
import { Order } from "@/lib/type";
import { InputJsonObject } from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const order: Order = await req.json();

  const createOrder = await prisma.order.create({
    data: {
      totalPrice: order.totalPrice,
      finished: false,
      items: order.items as unknown as InputJsonObject,
    },
  });

  return NextResponse.json({ id: createOrder.id });
}
