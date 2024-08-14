import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

function CarCard({ car }) {
  const { id, model, price, discount, image } = car;

  return (
    <div className="flex border border-stone-600 max-w-lg">
      <div className="relative flex-1">
        <Image
          fill
          className="object-cover border-r border-stone-600"
          src={image}
          alt={model}
        />
      </div>

      <div className="space-y-3">
        <div className="space-y-3 ml-4">
          <h3 className="text-lg font-medium mb-1">{model}</h3>
          <p className="space-x-2">
            {discount > 0 ? (
              <>
                <span className="text-xl">${price - discount}</span>
                <span className="line-through text-stone-400 text-sm">
                  {price}
                </span>
              </>
            ) : (
              <span className="text-xl">${price}</span>
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
