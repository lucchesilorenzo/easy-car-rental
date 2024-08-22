import Link from "next/link";

function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <h1 className="text-4xl font-medium text-cyan-400">
        Thank you for your reservation!
      </h1>
      <Link href="/account/reservations" className="underline font-semibold">
        Manage your reservations &rarr;
      </Link>
    </div>
  );
}

export default Page;
