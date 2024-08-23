import { updateGuestAction } from "@/lib/actions";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import SelectCountry from "./SelectCountry";

function UpdateProfileForm({ guest }) {
  const {
    fullName,
    email,
    dateOfBirth,
    nationality,
    countryFlag,
    drivingLicenseNumber,
    phoneNumber,
  } = guest;

  return (
    <form action={updateGuestAction} className="flex flex-col gap-4 max-w-full">
      <div className="flex flex-col space-y-2">
        <label>Full name</label>
        <input
          disabled
          defaultValue={fullName}
          type="text"
          name="fullName"
          id="fullName"
          className="text-stone-800 bg-stone-200 py-3 px-4 rounded disabled:bg-stone-600 disabled:text-stone-300 disabled:cursor-not-allowed"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label>Email</label>
        <input
          disabled
          defaultValue={email}
          type="email"
          name="email"
          id="email"
          className="text-stone-800 bg-stone-200 py-3 px-4 rounded disabled:bg-stone-600 disabled:text-stone-300 disabled:cursor-not-allowed"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label>Date of birth</label>
        <input
          defaultValue={dateOfBirth}
          type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          className="text-stone-800 bg-stone-200 py-3 px-4 rounded"
          required
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label>Phone number</label>
        <input
          defaultValue={phoneNumber}
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          className="text-stone-800 bg-stone-200 py-3 px-4 rounded"
          required
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label>Driving license number</label>
        <input
          defaultValue={drivingLicenseNumber}
          type="text"
          name="drivingLicenseNumber"
          id="drivingLicenseNumber"
          className="text-stone-800 bg-stone-200 py-3 px-4 rounded"
          required
        />
      </div>

      <div className="flex flex-col space-y-2">
        <div className="flex gap-2 justify-between items-center">
          <label>Nationality</label>
          {countryFlag && (
            <Image
              src={countryFlag}
              alt="Country Flag"
              width="20"
              height="20"
            />
          )}
        </div>
        <SelectCountry
          name="nationality"
          id="nationality"
          nationality={nationality}
          countryFlag={countryFlag}
        />
      </div>

      <div className="flex justify-end mt-6">
        <PrimaryButton type="Updating...">Update profile</PrimaryButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
