import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import { createReservationAction } from "@/lib/actions";

function CarForm({ car, user }) {
  const { id } = car;

  return (
    <>
      <div className="flex justify-between items-center p-4 border-b border-stone-600 bg-stone-700">
        <p>Logged in as</p>
        <div className="flex gap-4 items-center">
          <Image
            src={user.image}
            alt={user.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <span>{user.name}</span>
        </div>
      </div>
      <form action={createReservationAction} className="p-6">
        <input type="hidden" name="id" value={id} />

        <div className="flex flex-col gap-4">
          <label>For how many days?</label>
          <select
            name="numDays"
            id="numDays"
            className="text-stone-800 bg-stone-200 p-2 rounded w-[270px]"
            required
          >
            <option value="" key="">
              Select number of days...
            </option>
            {Array.from({ length: 30 }, (_, i) => (
              <option value={i + 1} key={i}>
                {i + 1 === 1 ? "1 day" : `${i + 1} days`}
              </option>
            ))}
          </select>

          <div>
            <PrimaryButton>Reserve</PrimaryButton>
          </div>
        </div>
      </form>
    </>
  );
}

export default CarForm;
