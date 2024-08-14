"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { createReservation, updateGuest } from "./data-service";

export async function updateGuestAction(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const guestId = session.user.guestId;
  const dateOfBirth = formData.get("dateOfBirth");
  const phoneNumber = formData.get("phoneNumber");
  const drivingLicenseNumber = formData.get("drivingLicenseNumber");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  const updatedFields = {
    dateOfBirth,
    phoneNumber,
    drivingLicenseNumber,
    nationality,
    countryFlag,
  };

  await updateGuest(guestId, updatedFields);

  revalidatePath("/account/profile");
}

export async function createReservationAction(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const newReservation = {
    // TODO
  };

  await createReservation(newReservation);
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
