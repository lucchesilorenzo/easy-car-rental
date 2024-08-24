import { signOutAction } from "@/lib/actions";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

function SignOutButton() {
  return (
    <form
      action={async (formData) => {
        if (confirm("Are you sure you want to sign out?"))
          await signOutAction(formData);
      }}
    >
      <button className="text-sm lg:text-md flex items-center gap-4 p-4 w-full transition-all hover:bg-stone-600">
        <ArrowRightStartOnRectangleIcon className="w-6 h-6 text-stone-400" />
        <span className="hidden lg:inline">Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
