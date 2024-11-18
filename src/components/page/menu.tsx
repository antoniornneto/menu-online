import Card from "../ui/card";

type ProductsProp = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}[];

export default async function Menu({ products }: { products: ProductsProp }) {
  return (
    <div className="space-y-5">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
