"use client";

import { deleteReservationAction } from "@/lib/actions";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ reservationId }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?"))
      startTransition(() => deleteReservationAction(reservationId));
  }

  return (
    <button
      onClick={handleDelete}
      className="flex flex-1 gap-2 p-4 hover:bg-stone-600 transition-all"
    >
      {!isPending ? (
        <>
          <TrashIcon className="w-6 h-6 text-stone-400" />
          <span>Delete</span>
        </>
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}

export default DeleteReservation;
