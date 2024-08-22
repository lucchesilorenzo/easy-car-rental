import { getCar } from "@/lib/data-service";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import DeleteReservation from "./DeleteReservation";

async function ReservationCard({ reservation }) {
  const { totalPrice, numDays, carId, id } = reservation;
  const { image, model } = await getCar(carId);

  return (
    <li className="flex border border-stone-600">
      <div className="relative h-32 aspect-square">
        <Image
          src={image}
          alt={model}
          fill
          className="object-cover border-r border-stone-600"
        />
      </div>
      <div className="flex-1 border-r border-stone-600 p-4">
        <h3 className="text-lg font-medium">{model}</h3>
        <p className="flex gap-4">
          <span className="font-semibold text-cyan-400">${totalPrice}</span>
          <span>&bull;</span>
          <span>{numDays} days</span>
        </p>
      </div>
      <div className="flex flex-col divide-y-2 divide-stone-600">
        <Link
          href={`/account/reservations/edit/${id}`}
          className="flex flex-1 items-center gap-2 p-4 hover:bg-stone-600 transition-all"
        >
          <PencilSquareIcon className="w-6 h-6 text-stone-400" />
          <span>Edit</span>
        </Link>
        <DeleteReservation reservationId={id} />
      </div>
    </li>
  );
}

export default ReservationCard;
