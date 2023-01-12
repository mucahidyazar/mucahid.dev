const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'tr',
  otherLanguages: ['en']
})

module.exports = NextI18NextInstance;