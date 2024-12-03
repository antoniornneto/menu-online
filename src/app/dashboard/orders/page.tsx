import OrderTable from "@/components/orderTables";
import { prisma } from "@/lib/prisma";

export default async function OrderPage() {
  const orders = await prisma.order.findMany();

  return (
    <div>
      <h1>Pedidos</h1>
      <OrderTable orders={orders} />
    </div>
  );
}
