import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

function renderMarkup(countries) {
  const markUp = countries
    .map(country => {
      return `<li>
                <h2>${country.name.official}</h2>
            </li>`;
    })
    .join('');

  refs.countryList.innerHTML = markUp;
}

function onInput(e) {
  const countryName = e.target.value.trim();

  if (!countryName) {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
    return;
  }

  fetchCountries(countryName)
    .then(countries => {
      console.log(countries);
      renderMarkup(countries);
    })
    .catch(error => {
      console.error(error);
    });
}

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
