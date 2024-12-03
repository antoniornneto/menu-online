import { JsonValue } from "@prisma/client/runtime/library";
import { TableCell } from "./ui/table";
import { ItemOrder } from "@/lib/type";

export default function DisplayItem({ items }: { items: JsonValue }) {
  const itemsToString = JSON.stringify(items);
  const stringToObject: ItemOrder[] = JSON.parse(itemsToString);
  console.log(stringToObject[0].name);
  return (
    <TableCell className="flex flex-col items-center">
      {stringToObject.map((item) => (
        <div className="w-36" key={item.id}>
          <span>
            {item.quantity}x {item.name}
          </span>
          <br />
        </div>
      ))}
    </TableCell>
  );
}
