"use client";

import { CalendarIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignOutButton from "./SignOutButton";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="w-6 h-6 text-stone-400" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarIcon className="w-6 h-6 text-stone-400" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="w-6 h-6 text-stone-400" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-r border-stone-600">
      <ul className="space-y-2">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className={`flex items-center gap-4 p-4 transition-all hover:bg-stone-600 ${
              pathname === link.href ? "bg-stone-600" : ""
            }`}
          >
            {link.icon}
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}

        <li>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
