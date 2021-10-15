import fetchCountries from './fetchCountries.js';
import fnMarkup from './fnMarkup.js';

export default function (event) {
  fetchCountries(`${event.target.value.trim()}`).then(data => fnMarkup(data));
}
