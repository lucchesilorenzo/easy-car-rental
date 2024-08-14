import PrimaryButton from "@/components/PrimaryButton";
import bg from "@/public/bg.webp";
import Image from "next/image";

function Page() {
  return (
    <main className="mt-32">
      <Image
        src={bg}
        fill
        alt="Background Image"
        placeholder="blur"
        className="object-cover object-top"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-7xl mb-14 tracking-tight">
          Welcome to Easy Car Rental.
        </h1>
        <PrimaryButton href="/cars">Explore cars</PrimaryButton>
      </div>
    </main>
  );
}

export default Page;
