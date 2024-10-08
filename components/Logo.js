import logo from "@/public/logo.webp";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        alt="Logo"
        width={50}
        height={50}
        className="rounded-full"
      />

      <span className="font-semibold hidden text-sm sm:block lg:text-md">
        Easy Car Rental
      </span>
    </Link>
  );
}

export default Logo;
