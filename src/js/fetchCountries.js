export default function fetchCountries(countryName) {
  const countryParameters = new URLSearchParams(
    'name,capital,population,flags,languages'
  );

  return fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fields=${countryParameters}`
  ).then(response => response.json());
}
