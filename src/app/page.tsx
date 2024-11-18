import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-center px-5 space-y-5">
      <div className="relative w-96 h-96">
        <Image alt="/" src={"/menu.png"} fill sizes="100vw" />
      </div>
      <h1 className="text-3xl font-bold text-balance">
        Pedidos simples na palma de sua mão.
      </h1>
      <p className="text-sm text-zinc-400">
        Soluções de cardápios online para o seu estabelecimento.
      </p>
      <Button className="text-xl text-center font-bold shadow-black shadow-md">
        <Link href={"/menu"}>Começar</Link>
      </Button>
    </div>
  );
}
