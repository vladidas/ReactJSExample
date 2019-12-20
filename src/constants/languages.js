import LocalizedStrings from 'react-localization';
import {ua} from './languages/ua';
import {en} from './languages/en';
import {ru} from './languages/ru';

const languages = {
  ua: ua,
  en: en,
  ru: ru,
};

export default new LocalizedStrings(languages);