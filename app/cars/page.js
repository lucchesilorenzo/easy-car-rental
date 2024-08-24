import CarList from "@/components/CarList";
import Filter from "@/components/Filter";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";

export const revalidate = 0;

export const metadata = {
  title: "Cars",
};

function Page({ searchParams }) {
  const filter = searchParams?.price ?? "all";

  return (
    <div>
      <h1 className="text-2xl lg:text-3xl font-medium text-cyan-400 mb-6">
        Our Cars
      </h1>
      <p className="text-sm lg:text-md leading-relaxed">
        Experience the thrill of the open road with our premium cars, designed
        for comfort and luxury. Picture yourself cruising through breathtaking
        landscapes, whether it&apos;s along the coast or through winding
        mountain roads. Enjoy the freedom to explore at your own pace, with the
        wind in your hair and the world at your feet. Our vehicles offer the
        perfect blend of style and performance, making every journey an
        adventure. Welcome to your next great escape.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CarList filter={filter} />
      </Suspense>
    </div>
  );
}

export default Page;
