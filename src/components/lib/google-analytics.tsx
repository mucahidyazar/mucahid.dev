'use client'

import Script from 'next/script'

import {configs} from '@/configs'
import {env} from '@/configs/env.mjs'

export function GoogleAnalytics() {
  const googleAnalyticsID = env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

  if (!configs.isProduction || !googleAnalyticsID) return null

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js? 
      id=${googleAnalyticsID}`}
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleAnalyticsID}');
        `,
        }}
      />
    </>
  )
}
