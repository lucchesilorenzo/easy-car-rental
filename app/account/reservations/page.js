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
      <h2 className="text-2xl text-cyan-400">Your reservations</h2>
      {!reservations.length ? (
        <p className="text-lg mt-4">
          You don&apos;t have any reservations yet. Check out our{" "}
          <Link href="/cars" className="underline text-cyan-400 font-semibold">
            cars &rarr;
          </Link>
        </p>
      ) : (
        <p>Reservations</p>
      )}
    </div>
  );
}

export default Page;
