import UpdateProfileForm from "@/components/UpdateProfileForm";
import { auth } from "@/lib/auth";
import { getGuest } from "@/lib/data-service";

export const metadata = {
  title: "Profile",
};

async function Page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl text-cyan-400">Update your guest profile</h2>
      <p>
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm guest={guest} />
    </div>
  );
}

export default Page;
