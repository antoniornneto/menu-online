import { X, Loader2, Check } from "lucide-react";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ItemProp } from "@/lib/type";

interface ModalProps {
  closeModal: () => void;
  item: ItemProp | undefined;
}

const FormSchema = z.object({
  category: z.coerce.string().min(1),
  name: z.coerce.string().min(1),
  description: z.coerce.string(),
  price: z.coerce.number(),
  quantity: z.coerce.number(),
});

export function EditForm({ closeModal, item }: ModalProps) {
  const [action, setAction] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      category: item?.category,
      name: item?.name,
      description: item?.description,
      price: item?.price,
      quantity: item?.quantity,
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setAction(true);

    await fetch(`/api/edit-item/${item?.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: values.category,
        name: values.name,
        description: values.description,
        price: values.price,
        quantity: values.quantity,
      }),
    });
    setTimeout(() => {
      setAction(false);
      location.reload();
    }, 800);
  };

  return (
    <div className="fixed inset-0 bg-black/60 w-screen h-screen flex justify-center items-center z-10">
      <div className="bg-white w-80 rounded-lg p-5 flex flex-col">
        <button className="self-end" onClick={closeModal}>
          <X />
        </button>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-3">
              <h1>Adicione um novo item ao cardápio.</h1>
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Categoria</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Nome</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Descrição</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Preço</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Quantidade</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="mt-5" type="submit">
                {action ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <Check />
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
