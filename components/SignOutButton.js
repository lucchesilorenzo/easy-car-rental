import { signOutAction } from "@/lib/actions";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

function SignOutButton() {
  return (
    <form
      action={async (formData) => {
        if (confirm("Are you sure you want to sign out?"))
          await signOutAction(formData);
      }}
      className="flex items-center gap-4 p-4 transition-all hover:bg-stone-600"
    >
      <ArrowRightStartOnRectangleIcon className="w-6 h-6 text-stone-400" />
      <button>Sign out</button>
    </form>
  );
}

export default SignOutButton;
