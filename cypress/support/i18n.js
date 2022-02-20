import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

import enCommon from '../../public/locales/en/common.json'
import trCommon from '../../public/locales/tr/common.json'

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  resources: {
    en: {
      common: enCommon,
    },
    tr: {
      common: trCommon,
    },
  },
})

export {i18n}
