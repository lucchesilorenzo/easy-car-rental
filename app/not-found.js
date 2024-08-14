import PrimaryButton from "@/components/PrimaryButton";

function NotFound() {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-3xl font-bold">This page could not be found ☹️</h1>
      <PrimaryButton href="/">Go back home</PrimaryButton>
    </div>
  );
}

export default NotFound;
