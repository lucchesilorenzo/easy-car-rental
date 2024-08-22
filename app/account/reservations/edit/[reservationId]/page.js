import PrimaryButton from "@/components/PrimaryButton";
import { updateReservationAction } from "@/lib/actions";

export const metadata = {
  title: "Edit Reservation",
};

function Page({ params }) {
  const { reservationId: id } = params;

  return (
    <div>
      <h2 className="text-2xl text-cyan-400">Edit Reservation #{id}</h2>

      <form action={updateReservationAction} className="mt-6">
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
            <PrimaryButton type="Updating...">Update reservation</PrimaryButton>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Page;
