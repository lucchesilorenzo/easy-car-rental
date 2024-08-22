import { notFound } from "next/navigation";
import { supabase } from "./supabase";

export async function getCar(id) {
  const { data, error } = await supabase
    .from("cars")
    .select("*")
    .eq("id", id)
    .single();

  if (error) notFound();

  return data;
}

export async function getCars() {
  const { data, error } = await supabase.from("cars").select("*");

  if (error) throw new Error("Failed to fetch cars");

  return data;
}

export async function getCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag"
    );

    const countries = await res.json();

    return countries;
  } catch {
    throw new Error("Failed to fetch countries");
  }
}

export async function getGuest(email) {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();

  if (error) throw new Error("Failed to fetch guest");

  return data;
}

export async function createGuest(newGuest) {
  const { data, error } = await supabase.from("guests").insert([newGuest]);

  if (error) throw new Error("Failed to create guest");

  return data;
}

export async function updateGuest(id, updatedFields) {
  const { data, error } = await supabase
    .from("guests")
    .update(updatedFields)
    .eq("id", id);

  if (error) throw new Error("Failed to update guest");

  return data;
}

export async function getReservation(id) {
  const { data, error } = await supabase
    .from("reservations")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error("Failed to fetch reservation");

  return data;
}

export async function getReservations(id) {
  const { data, error } = await supabase
    .from("reservations")
    .select("*")
    .eq("guestId", id);

  if (error) throw new Error("Failed to fetch reservations");

  return data;
}

export async function createReservation(newReservation) {
  const { data, error } = await supabase
    .from("reservations")
    .insert([newReservation]);

  if (error) throw new Error("Failed to create reservation");

  return data;
}

export async function updateReservation(id, updatedFields) {
  const { data, error } = await supabase
    .from("reservations")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error("Failed to update reservation");

  return data;
}

export async function deleteReservation(id) {
  const { error } = await supabase.from("reservations").delete().eq("id", id);

  if (error) throw new Error("Failed to delete reservation");
}
