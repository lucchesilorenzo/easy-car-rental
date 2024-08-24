import {
  CurrencyDollarIcon,
  EyeSlashIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

function Car({ car }) {
  const { model, price, description, image } = car;

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 border border-stone-600">
      <div className="relative aspect-square w-full lg:w-[320px]">
        <Image
          className="object-cover border-b border-stone-600 lg:border-r lg:border-b-0"
          src={image}
          alt={model}
          fill
        />
      </div>
      <div className="px-4">
        <h1 className="text-2xl lg:text-3xl font-medium text-cyan-400 my-6">
          {model}
        </h1>
        <p className="text-sm lg:text-md leading-relaxed">{description}</p>

        <ul className="flex flex-col gap-4 my-6">
          <li className="flex gap-2 items-center">
            <CurrencyDollarIcon className="w-6 h-6 text-stone-400" />
            <span className="text-sm lg:text-md">
              Price: <span className="font-bold">${price - car?.discount}</span>{" "}
              / day
            </span>
          </li>

          <li className="flex gap-2 items-center">
            <LightBulbIcon className="w-6 h-6 text-stone-400" />
            <span className="text-sm lg:text-md">
              <span className="font-bold">Fast</span> and{" "}
              <span className="font-bold">reliable</span> service
            </span>
          </li>

          <li className="flex gap-2 items-center">
            <EyeSlashIcon className="w-6 h-6 text-stone-400" />
            <span className="text-sm lg:text-md">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Car;
