"use client";

import { Trash2 } from "lucide-react";

export default function DeleteButton({ id }: { id: string }) {
  const deleteItem = async (id: string) => {
    await fetch(`/api/delete-item/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
      }),
    });

    setTimeout(() => {
      location.reload();
    }, 700);
  };
  return (
    <button onClick={() => deleteItem(id)}>
      <Trash2 size={16} />
    </button>
  );
}
