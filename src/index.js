import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
};

refs.input.addEventListener('input', e => {
  const countryName = e.currentTarget.value;

  fetchCountries(countryName);
});

function renderMarkup() {
  let markUp;
}
function onInput() {}
