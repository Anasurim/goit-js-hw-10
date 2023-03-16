import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
};

refs.input.addEventListener('input', e => {
  const countryName = e.currentTarget.value;

  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
});

function fetchCountries() {}
