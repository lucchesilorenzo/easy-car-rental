"use client";

import PrimaryButton from "@/components/PrimaryButton";

function Error({ error, reset }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg mb-4">{error.message}</p>
      <PrimaryButton onClick={reset}>Try again</PrimaryButton>
    </div>
  );
}

export default Error;
