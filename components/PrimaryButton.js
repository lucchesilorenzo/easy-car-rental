"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";

function PrimaryButton({ children, href, onClick, type }) {
  const { pending } = useFormStatus();
  const styles =
    "bg-slate-100 text-gray-800 px-7 py-5 font-semibold hover:bg-slate-200 transition-all inline-block";

  if (onClick)
    return (
      <button onClick={onClick} className={styles}>
        {children}
      </button>
    );

  if (href)
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );

  if (type)
    return <button className={styles}>{!pending ? children : type}</button>;

  return <button className={styles}>{children}</button>;
}

export default PrimaryButton;
