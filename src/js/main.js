import refs from './refs.js';
import fnGetCountries from './fnGetCountries.js';

const debounce = require('lodash.debounce');

const { inputEl } = refs;

inputEl.addEventListener('input', debounce(fnGetCountries, 500));
