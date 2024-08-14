import Car from "@/components/Car";
import Reservation from "@/components/Reservation";
import Spinner from "@/components/Spinner";
import { getCar } from "@/lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { model } = await getCar(params.carId);

  return { title: model };
}

async function Page({ params }) {
  const car = await getCar(params.carId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Car car={car} />

      <div className="mt-24">
        <h1 className="text-4xl font-medium text-cyan-400 mb-6 text-center">
          Reserve{" "}
          <span className="italic font-bold underline">{car.model}</span> today.
          Pay on arrival.
        </h1>

        <Suspense fallback={<Spinner />}>
          <Reservation car={car} />
        </Suspense>
      </div>
    </div>
  );
}

export default Page;
