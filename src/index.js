import './css/styles.css';

const DEBOUNCE_DELAY = 300;

fetch('https://restcountries.com/v3.1/independent?status=true')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });
