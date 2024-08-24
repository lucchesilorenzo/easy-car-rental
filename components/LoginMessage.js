import Link from "next/link";

function LoginMessage() {
  return (
    <div className="bg-stone-600">
      <p className="text-sm lg:text-md tracking-tighter p-4 text-center">
        Please{" "}
        <Link className="text-cyan-400 underline" href="/login">
          login
        </Link>{" "}
        to reserve this car right now.
      </p>
    </div>
  );
}

export default LoginMessage;
