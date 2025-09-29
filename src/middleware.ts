import createMiddleware from 'next-intl/middleware';

import { LOCALE, LOCALES } from './constants/locales';

export default createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: LOCALE.en,

  // Use 'never' to avoid unnecessary redirects for default locale
  // This reduces redirect chains and improves SEO
  localePrefix: 'never'
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
