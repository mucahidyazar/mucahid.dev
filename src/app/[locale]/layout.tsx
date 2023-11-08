import './global.css'

import {Lora} from 'next/font/google'
import {notFound} from 'next/navigation'
import {NextIntlClientProvider} from 'next-intl'
import {Suspense} from 'react'

import Analytics from '@/components/Analytics'
import {ThemeProvider} from '@/components/providers/ThemeProvider'
import {prepareMetadata} from '@/utils/prepareMetadata'

const lora = Lora({subsets: ['latin']})

export function generateMetadata() {
  return prepareMetadata()
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../../public/locales/${locale}/common.json`))
      .default
  } catch (error) {
    notFound()
  }
}

type LayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}
export default async function RootLayout({
  children,
  params: {locale},
}: LayoutProps) {
  const messages = await getMessages(locale)

  return (
    <html lang={locale}>
      <head />
      <body
        className={`${lora.className} flex flex-col overflow-x-hidden bg-background`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            themes={['dark', 'light', 'navy']}
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>

        <Suspense>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
