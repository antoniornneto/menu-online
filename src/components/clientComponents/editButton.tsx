"use client";

import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { EditForm } from "../form/EditForm";
import { ItemProp } from "@/lib/type";

export default function EditButton({ id }: { id: string }) {
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState<ItemProp>();

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    const getItem = async (id: string) => {
      const req = await fetch(`/api/get-item/${id}`);
      const res = await req.json();
      setItem(res.item);
    };

    getItem(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setItem]);

  return (
    <>
      <button onClick={openModal}>
        <Pencil size={16} />
      </button>
      {modal && <EditForm item={item} closeModal={closeModal} />}
    </>
  );
}
