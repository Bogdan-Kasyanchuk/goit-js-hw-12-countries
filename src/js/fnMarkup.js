import refs from './refs.js';
import countryTemplate from '../templates/countryTemplate.hbs';
import countriesTemplate from '../templates/countriesTemplate.hbs';
import { fnClearInput, fnClearMarkup } from './fnClear.js';
import { fnErrorMoreTen, fnError } from './pnotifyError.js';
import fnMarkupClick from './fnMarkupClick.js';

const { countryEl } = refs;

export default function (dataArray) {
  if (dataArray.length === 1) {
    fnClearMarkup();
    countryEl.insertAdjacentHTML('beforeend', countryTemplate(dataArray));
    fnClearInput();
  } else if (dataArray.length >= 2 && dataArray.length <= 10) {
    fnClearMarkup();
    countryEl.insertAdjacentHTML('beforeend', countriesTemplate(dataArray));
    const countriesListEl = document.querySelector('.countries-list');
    countriesListEl.addEventListener('click', event => {
      fnMarkupClick(
        event,
        dataArray.filter(element => element.name === event.target.textContent.trim()),
      );
    });
  } else if (dataArray.length > 10) {
    fnErrorMoreTen();
  } else {
    fnError();
  }
}
