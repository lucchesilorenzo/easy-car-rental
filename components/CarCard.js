import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

function CarCard({ car }) {
  const { id, model, price, discount, image } = car;

  return (
    <div className="flex flex-col justify-between lg:flex-row border border-stone-600 max-w-lg">
      <div className="relative aspect-video lg:w-[320px]">
        <Image
          fill
          className="object-cover border-b lg:border-r border-stone-600"
          src={image}
          alt={model}
        />
      </div>

      <div className="flex flex-col lg:space-y-4">
        <div className="h-[90px] p-2 lg:p-4 flex flex-col space-y-2 lg:space-y-4">
          <h3 className="text-sm lg:text-lg font-medium">{model}</h3>
          <p className="space-x-2">
            {discount > 0 ? (
              <>
                <span className="text-md lg:text-lg">${price - discount}</span>
                <span className="line-through text-stone-400 text-xs lg:text-sm">
                  {price}
                </span>
              </>
            ) : (
              <span className="text-md lg:text-lg">${price}</span>
            )}

            <span className="text-sm">/ day</span>
          </p>
        </div>

        <PrimaryButton href={`/cars/${id}`}>
          Details & reservation &rarr;
        </PrimaryButton>
      </div>
    </div>
  );
}

export default CarCard;
