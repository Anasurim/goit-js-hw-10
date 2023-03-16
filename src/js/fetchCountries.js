import { Notify } from 'notiflix';

export default function fetchCountries(countryName) {
  const countryParameters = new URLSearchParams(
    'fields=name,capital,population,flags,languages'
  );

  return fetch(
    `https://restcountries.com/v3.1/name/${countryName}?${countryParameters}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(
        Notify.failure('Oops, there is no country with that name')
      );
    }
    return response.json();
  });
}
