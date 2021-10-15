import refs from './refs.js';

const { inputEl, countryEl } = refs;

export function fnClearInput() {
  inputEl.value = '';
}

export function fnClearMarkup() {
  countryEl.innerHTML = '';
}
