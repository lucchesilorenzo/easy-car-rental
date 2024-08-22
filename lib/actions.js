"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import {
  createReservation,
  deleteReservation,
  getReservation,
  getReservations,
  updateGuest,
  updateReservation,
} from "./data-service";

export async function updateGuestAction(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const guestId = session.user.guestId;
  const dateOfBirth = formData.get("dateOfBirth");
  const phoneNumber = formData.get("phoneNumber");
  const drivingLicenseNumber = formData.get("drivingLicenseNumber");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[A-Z0-9]{5,15}$/.test(drivingLicenseNumber)) {
    throw new Error("Invalid driving license number");
  }

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

  const numDays = formData.get("numDays");
  const carPrice = formData.get("fullPrice");
  const totalPrice = numDays * carPrice;
  const carId = Number(formData.get("carId"));
  const guestId = session.user.guestId;

  const guestReservations = await getReservations(guestId);
  const isSameCar = guestReservations.some(
    (reservation) => reservation.carId === carId
  );

  if (isSameCar) throw new Error("You already have a reservation for this car");

  const newReservation = {
    numDays,
    carPrice,
    totalPrice,
    status: "unconfirmed",
    carId,
    guestId,
  };

  await createReservation(newReservation);

  revalidatePath(`/cars/${carId}`);

  redirect("/cars/thankyou");
}

export async function updateReservationAction(formData) {
  const reservationId = Number(formData.get("id"));

  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const { carPrice } = await getReservation(reservationId);

  const numDays = formData.get("numDays");
  const totalPrice = carPrice * numDays;

  const updatedFields = {
    numDays,
    totalPrice,
  };

  const guestReservations = await getReservations(session.user.guestId);
  const hasReservation = guestReservations.some(
    (reservation) => reservation.id === reservationId
  );

  if (!hasReservation) throw new Error("You don't have a reservation");

  await updateReservation(reservationId, updatedFields);

  revalidatePath(`/account/reservations/edit/${reservationId}`);
  revalidatePath(`/account/reservations`);

  redirect("/account/reservations");
}

export async function deleteReservationAction(reservationId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const guestReservations = await getReservations(session.user.guestId);
  const hasReservation = guestReservations.some(
    (reservation) => reservation.id === reservationId
  );

  if (!hasReservation) throw new Error("You don't have a reservation");

  await deleteReservation(reservationId);

  revalidatePath(`/account/reservations`);
}

export async function signInAction(formData) {
  const provider = formData.get("provider");

  await signIn(provider, { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
