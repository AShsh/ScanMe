import i18next from 'i18next';

export const setLanguage = function (language) {
  i18next.init({
    lng: language,
    resources: require('./en.json')
  });
}

export const i18n = i18next;