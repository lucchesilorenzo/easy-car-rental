import { auth } from "@/lib/auth";
import CarForm from "./CarForm";
import LoginMessage from "./LoginMessage";

async function Reservation({ car }) {
  const session = await auth();

  return (
    <div className="mx-auto border border-stone-600 w-full lg:w-[480px] space-y-2 mt-20">
      {session?.user ? (
        <CarForm car={car} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
