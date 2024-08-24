import { getCar } from "@/lib/data-service";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import DeleteReservation from "./DeleteReservation";

async function ReservationCard({ reservation }) {
  const { totalPrice, numDays, carId, id } = reservation;
  const { image, model } = await getCar(carId);

  return (
    <li className="flex flex-col lg:flex-row border border-stone-600 max-w-xs sm:flex-row sm:max-w-xl lg:max-w-6xl">
      <div className="relative h-32 aspect-square">
        <Image src={image} alt={model} fill className="object-cover" />
      </div>
      <div className="flex-1 border-b border-t border-stone-600 p-3 lg:border-b-0 sm:border-b-0 sm:border-r sm:border-l lg:border-r">
        <h3 className="text-sm lg:text-lg font-medium mb-2">{model}</h3>
        <p className="flex gap-2 text-sm lg:text-md lg:gap-4">
          <span className="font-semibold text-cyan-400">${totalPrice}</span>
          <span>&bull;</span>
          <span>{numDays} days</span>
        </p>
      </div>
      <div className="flex flex-col divide-y divide-stone-600 text-sm lg:text-md">
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
