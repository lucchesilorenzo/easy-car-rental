import PrimaryButton from "@/components/PrimaryButton";

function NotFound() {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-2xl lg:text-3xl font-bold">
        This car could not be found ☹️
      </h1>
      <PrimaryButton href="/cars">Back to all cars</PrimaryButton>
    </div>
  );
}

export default NotFound;
