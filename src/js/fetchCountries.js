export default function fetchCountries(countryName) {
  const countryParameters = new URLSearchParams(
    'name,capital,population,flags,languages'
  );

  console.log(countryParameters);

  fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fields=${countryParameters}`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
}
