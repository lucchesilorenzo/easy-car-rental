import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-sm lg:text-md">
      <ul className="flex items-center gap-8 lg:gap-16">
        <li>
          <Link href="/cars" className="font-semibold hover:underline">
            Cars
          </Link>
        </li>
        <li>
          <Link href="/about" className="font-semibold hover:underline">
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="font-semibold flex items-center gap-4 hover:underline"
            >
              <Image
                src={session.user.image}
                alt={session.user.name}
                width={30}
                height={30}
                className="rounded-full"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link href="/account" className="font-semibold hover:underline">
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
