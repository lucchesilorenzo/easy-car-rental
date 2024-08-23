"use client";

import PrimaryButton from "@/components/PrimaryButton";

function Error({ error, reset }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg mb-4">
        {process.env.NEXT_PUBLIC_ENV === "development"
          ? error.message
          : "An unexpected error occurred. Please try again later."}
      </p>

      <PrimaryButton onClick={reset}>Try again</PrimaryButton>
    </div>
  );
}

export default Error;
