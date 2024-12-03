import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { ItemOrder } from "@/lib/type";
import Link from "next/link";

export default async function Component({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = await prisma.order.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  const convertListToString = JSON.stringify(order?.items);
  const convertStringToObject: ItemOrder[] = JSON.parse(convertListToString);

  console.log(convertStringToObject);
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Menu Online</h1>
      </div>
      <div className="flex flex-col items-center text-center gap-5">
        <p className="text-2xl">Pedido realizado com sucesso!</p>
        <p>
          Informe o número do seu pedido no caixa para realizar o pagamento e
          retirar suas fichas!
        </p>
        <p>Número do pedido:</p>
        <p className="text-4xl">{id}</p>
        <div className="text-start">
          <p>Descrição do pedido:</p>
          {convertStringToObject.map((item) => (
            <div className="w-36" key={item.id}>
              <span>
                {item.quantity}x {item.name}
              </span>
              <br />
            </div>
          ))}
        </div>
        <Button>
          <Link href={"/"}>Voltar</Link>
        </Button>
      </div>
    </div>
  );
}
