import PrimaryButton from "@/components/PrimaryButton";
import bg from "@/public/bg.webp";
import Image from "next/image";

function Page() {
  return (
    <main className="mt-12 md:mt-20 lg:mt-16">
      <Image
        src={bg}
        fill
        alt="Background Image"
        placeholder="blur"
        className="object-cover object-top"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight mb-8 lg:mb-14">
          Welcome to Easy Car Rental.
        </h1>
        <PrimaryButton href="/cars">Explore cars</PrimaryButton>
      </div>
    </main>
  );
}

export default Page;
