import PrimaryButton from "@/components/PrimaryButton";
import about1 from "@/public/about-1.webp";
import about2 from "@/public/about-2.webp";
import Image from "next/image";

export const metadata = {
  title: "About",
};

function Page() {
  return (
    <div className="grid md:grid-cols-5 lg:grid-cols-5 gap-x-24 gap-y-16 lg:gap-y-32 text-sm lg:text-md items-center">
      <div className="col-span-3">
        <h1 className="text-2xl lg:text-3xl text-cyan-400 font-medium mb-10">
          Welcome to The Easy Car Rental
        </h1>

        <div className="space-y-8">
          <p>
            Where modern luxury and the thrill of the open road come together.
            Tucked away in the heart of your journey, this is your ultimate
            driving experience. But it&apos;s not just about the sleek cars.
            It&apos;s about the freedom to explore new places and create
            unforgettable memories with loved ones.
          </p>
          <p>
            Our fleet of premium vehicles provides a comfortable ride, but the
            real adventure lies in the destinations you choose. Cruise along
            scenic routes, feel the wind in your hair, and enjoy the beauty of
            the world around you from the comfort of your luxury car.
          </p>
          <p>
            This is where lasting memories are made, with the perfect blend of
            style and adventure. It&apos;s a place to embrace the joy of the
            journey, relax, and savor every moment in a vehicle that reflects
            your love for the road.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image src={about1} alt="About 1" placeholder="blur" />
      </div>

      <div className="col-span-2">
        <Image src={about2} alt="About 2" placeholder="blur" />
      </div>

      <div className="col-span-3">
        <h1 className="text-2xl lg:text-3xl text-cyan-400 font-medium mb-10">
          Managed by our family since 1980
        </h1>

        <div className="space-y-8">
          <p>
            Since 1980, Easy Car Rental has been a trusted family-run service.
            Started by our parents with a passion for cars and travel, this
            business has grown with dedication and hard work, passing down
            through generations as a symbol of our commitment to providing
            top-notch service.
          </p>
          <p>
            Over the years, we&apos;ve preserved the values that make Easy Car
            Rental special, combining the thrill of the open road with the
            personal care that only a family business can deliver. Here,
            you&apos;re not just a customer; you&apos;re part of our extended
            family. So join us at Easy Car Rental soon, where tradition meets
            adventure, and every journey feels like home.
          </p>

          <PrimaryButton href="/cars">Explore cars</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default Page;
