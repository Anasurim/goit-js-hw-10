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

function renderMarkupUl(countries) {
  const markUp = countries
    .map(country => {
      return `<li class="country-list__item">
                <img src="${country.flags.svg}" alt="country flag" width=30px>
                <h2>${country.name.official}</h2>
              </li>`;
    })
    .join('');

  refs.countryList.innerHTML = markUp;
}

function renderMarkupInfo(countries) {
  const markUp = countries
    .map(country => {
      return `<img src="${country.flags.svg}" alt="country flag" width="30px" />
                <h2>${country.name.official}</h2>
                <ul class="country-info__list">
                    <li>
                        <span class="country-info__name">Capital: ${country.capital}</span>
                    </li>
                    <li>
                        <span class="country-info__name">Population: ${country.population}</span>
                    </li>
                    <li>
                        <span class="country-info__name">Languages: ${country.languages}</span>
                    </li>
                </ul>`;
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

      const numOfCountries = countries.length;
      if (numOfCountries > 10) {
        return Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }

      if (numOfCountries >= 2 && numOfCountries < 10) {
        return renderMarkupUl(countries);
      }

      renderMarkupInfo(countries);
    })
    .catch(error => {
      console.error(error);
    });
}

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
