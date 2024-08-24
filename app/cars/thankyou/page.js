import Link from "next/link";

function Page() {
  return (
    <div className="text-center">
      <h1 className="text-xl lg:text-2xl font-medium text-cyan-400 mb-8">
        Thank you for your reservation!
      </h1>
      <Link href="/account/reservations" className="underline font-semibold">
        Manage your reservations &rarr;
      </Link>
    </div>
  );
}

export default Page;
