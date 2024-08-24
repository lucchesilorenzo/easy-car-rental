import { auth } from "@/lib/auth";

export const metadata = {
  title: "Account",
};

async function Page() {
  const session = await auth();
  const name = session.user.name.split(" ").at(0);

  return <h2 className="text-xl lg:text-2xl">Welcome, {name}</h2>;
}

export default Page;
