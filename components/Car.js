import {
  CurrencyDollarIcon,
  EyeSlashIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

function Car({ car }) {
  const { model, price, description, image } = car;

  return (
    <div className="flex gap-10 border border-stone-600">
      <div className="relative aspect-square w-[320px]">
        <Image
          className="object-cover border-r border-stone-600"
          src={image}
          alt={model}
          fill
        />
      </div>
      <div>
        <h1 className="text-4xl font-medium text-cyan-400 my-6">{model}</h1>
        <p className="leading-relaxed">{description}</p>

        <ul className="flex flex-col gap-4 my-6">
          <li className="flex gap-2 items-center">
            <CurrencyDollarIcon className="w-6 h-6 text-stone-400" />
            <span className="text-lg">
              Price: <span className="font-bold">${price - car?.discount}</span>{" "}
              / day
            </span>
          </li>

          <li className="flex gap-2 items-center">
            <LightBulbIcon className="w-6 h-6 text-stone-400" />
            <span className="text-lg">
              <span className="font-bold">Fast</span> and{" "}
              <span className="font-bold">reliable</span> service
            </span>
          </li>

          <li className="flex gap-2 items-center">
            <EyeSlashIcon className="w-6 h-6 text-stone-400" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Car;
