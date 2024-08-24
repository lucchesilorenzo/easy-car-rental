import ReservationCard from "@/components/ReservationCard";
import { auth } from "@/lib/auth";
import { getReservations } from "@/lib/data-service";
import Link from "next/link";

export const metadata = {
  title: "Reservations",
};

async function Page() {
  const session = await auth();
  const reservations = await getReservations(session.user.guestId);

  return (
    <div>
      <h2 className="text-xl lg:text-2xl text-cyan-400 mb-6">
        Your reservations
      </h2>
      {!reservations.length ? (
        <p className="text-sm lg:text-md mt-4">
          You don&apos;t have any reservations yet. Check out our{" "}
          <Link href="/cars" className="underline text-cyan-400 font-semibold">
            cars &rarr;
          </Link>
        </p>
      ) : (
        <ul className="max-w-xl lg:max-w-6xl space-y-4">
          {reservations.map((reservation) => (
            <ReservationCard reservation={reservation} key={reservation.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Page;
