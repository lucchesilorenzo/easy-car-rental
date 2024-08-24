import SignInButton from "@/components/SignInButton";

export const metadata = {
  title: "Login",
};

function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h2 className="text-xl lg:text-2xl">Sign in to access your guest area</h2>
      <SignInButton />
    </div>
  );
}

export default Page;
