import { getCars } from "../lib/data-service";
import CarCard from "./CarCard";

async function CarList({ filter }) {
  const cars = await getCars();

  if (!cars.length) return null;

  let filteredCars;

  if (filter === "all") filteredCars = cars;
  if (filter === "0-30")
    filteredCars = cars.filter((car) => car.price - car?.discount <= 30);
  if (filter === "30-60")
    filteredCars = cars.filter(
      (car) => car.price - car?.discount > 30 && car.price - car?.discount <= 60
    );
  if (filter === "60-100")
    filteredCars = cars.filter(
      (car) =>
        car.price - car?.discount > 60 && car.price - car?.discount <= 100
    );
  if (filter === "100-150")
    filteredCars = cars.filter(
      (car) =>
        car.price - car?.discount > 100 && car.price - car?.discount <= 150
    );

  return (
    <div className="grid grid-cols-2 gap-12">
      {filteredCars.map((car) => (
        <CarCard car={car} key={car.id} />
      ))}
    </div>
  );
}

export default CarList;
