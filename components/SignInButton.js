import { signInAction } from "@/lib/actions";
import Image from "next/image";

function SignInButton() {
  return (
    <form action={signInAction} className="space-y-6">
      <button
        className="flex items-center gap-3 bg-transparent hover:bg-black/10 transition-all p-3 border border-stone-600"
        name="provider"
        value="google"
      >
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Sign in with Google"
          width={30}
          height={30}
        />
        <span className="text-sm lg:text-md">Continue with Google</span>
      </button>

      <button
        className="flex items-center gap-3 bg-transparent hover:bg-black/10 transition-all p-3 border border-stone-600"
        name="provider"
        value="github"
      >
        <Image
          src="https://authjs.dev/img/providers/github.svg"
          alt="Sign in with GitHub"
          width={30}
          height={30}
        />
        <span className="text-sm lg:text-md">Continue with GitHub</span>
      </button>
    </form>
  );
}

export default SignInButton;
