import { getCountries } from "@/lib/data-service";

async function SelectCountry({ name, id, nationality, countryFlag }) {
  const countries = await getCountries();

  return (
    <select
      defaultValue={`${nationality}%${countryFlag}`}
      name={name}
      id={id}
      className="text-stone-800 bg-stone-200 py-3 px-4 rounded"
      required
    >
      <option value="">Select country...</option>
      {countries.map((country) => (
        <option value={`${country.name}%${country.flag}`} key={country.name}>
          {country.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
