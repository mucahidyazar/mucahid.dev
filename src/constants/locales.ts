export const LOCALE = {
  tr: 'tr',
  en: 'en',
  kg: 'kg',
  ru: 'ru'
} as const

export const LOCALES = Object.values(LOCALE) as (keyof typeof LOCALE)[]