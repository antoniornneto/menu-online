import Image from "next/image";
import Quantity from "./quantity";

type ProductProp = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};
export default async function Card({ product }: { product: ProductProp }) {
  return (
    <div className="flex gap-3 border-[1px] rounded-lg">
      <div className="w-40 h-40 relative">
        <Image
          src={product.image}
          alt={`Foto do ${product.name}`}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-center text-start gap-1">
        <h1 className="font-bold">{product.name}</h1>
        <span>R$ {product.price}</span>
        <p className="text-sm text-zinc-400">{product.description}</p>
        <Quantity />
      </div>
    </div>
  );
}
