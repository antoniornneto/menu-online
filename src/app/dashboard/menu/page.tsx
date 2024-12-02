import DeleteButton from "@/components/clientComponents/deleteButton";
import EditButton from "@/components/clientComponents/editButton";
import ModalAddItem from "@/components/form/ModalAddItem";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { prisma } from "@/lib/prisma";
import { FoodItem } from "@/lib/type";

export default async function MenuPage() {
  const menu: FoodItem = await prisma.menu.findMany();

  return (
    <div className="space-y-5">
      <ModalAddItem />
      <Table>
        <TableCaption>Itens disponíveis no cardápio.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Categoria</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead className="text-center">Preço</TableHead>
            <TableHead className="text-center">Quantidade</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {menu.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.category}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                {item.description == "undefined" ? "" : item.description}
              </TableCell>
              <TableCell className="text-center">
                R$ {item.price.toFixed(2)}
              </TableCell>
              <TableCell className="text-center">{item.quantity}</TableCell>
              <TableCell className="flex gap-2">
                <DeleteButton id={item.id} />
                <EditButton id={item.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
