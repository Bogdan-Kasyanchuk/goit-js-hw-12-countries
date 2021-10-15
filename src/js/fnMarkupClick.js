import refs from './refs.js';
import { fnClearInput, fnClearMarkup } from './fnClear.js';
import countryTemplate from '../templates/countryTemplate.hbs';

const { countryEl } = refs;

export default function (event, dataArray) {
  if (event.target.nodeName !== 'LI') {
    return;
  } else {
    fnClearMarkup();
    countryEl.insertAdjacentHTML('beforeend', countryTemplate(dataArray));
    fnClearInput();
  }
}
