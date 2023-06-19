import countries from "world-countries";

const formatterCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng.toString(),
  region: country.region,
}));

const useCountries = () => {
  const getAll = () => formatterCountries;
  const getByValue = (value: string) => {
    return formatterCountries.find((item) => (item.value = value));
  };
  return {
    getAll,
    getByValue,
  };
};
export default useCountries;
