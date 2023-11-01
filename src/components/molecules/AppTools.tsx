'use client'
import {BoltIcon, MoonIcon, SunIcon} from '@heroicons/react/24/outline'
import {usePathname, useRouter} from 'next/navigation'
import {useLocale, useTranslations} from 'next-intl'
import {useTheme} from 'next-themes'
import {useTransition} from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {LOCALE, LOCALES} from '@/constants'
import {cn} from '@/utils'

import {ReactPlayer} from './ReactPlayer'

type AppToolsProps = {
  className?: string
}
export function AppTools({className}: AppToolsProps) {
  const [isPending, startTransition] = useTransition()
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const {setTheme, theme} = useTheme()

  const locales = LOCALES.filter(l => l !== locale)

  function onSelectChange(newLocale: keyof typeof LOCALE) {
    startTransition(() => {
      const hasPrefix = pathname.startsWith(`/${locale}`)
      if (hasPrefix) {
        router.push(pathname.replace(`/${locale}`, `/${newLocale}`))
      } else {
        router.push(`/${newLocale}/${pathname}`)
      }
    })
  }

  const themeIconMap = {
    dark: <SunIcon className="w-3" />,
    light: <MoonIcon className="w-3" />,
    navy: <BoltIcon className="w-3" />,
    system: <BoltIcon className="w-3" />,
  } as {[key: string]: React.ReactNode}

  return (
    <section
      id="app-tools"
      className={cn(
        'bg-background fixed right-2 top-2 z-20 flex gap-1 rounded bg-opacity-60 lg:right-4',
        className,
      )}
    >
      <ReactPlayer />

      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            'relative z-50 flex h-9 w-9 items-center justify-center rounded border border-primary-500 border-opacity-10 bg-primary-500 bg-opacity-5 text-xs uppercase text-primary-500 shadow-soft-md hover:shadow-soft-lg',
          )}
        >
          {isPending ? '...' : locale}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {locales.map(cur => (
            <DropdownMenuLabel
              key={cur}
              onClick={() => onSelectChange(cur)}
              className="cursor-pointer text-center text-xs font-thin uppercase text-primary-500 hover:bg-primary-500 hover:bg-opacity-5"
            >
              {t('locale', {locale: cur})}
            </DropdownMenuLabel>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <button
        className={cn(
          'relative z-50 flex h-9 w-9 items-center justify-center rounded border border-primary-500 border-opacity-10 bg-primary-500 bg-opacity-5 text-primary-500 shadow-soft-md hover:shadow-soft-lg',
        )}
        onClick={() => {
          let selectedTheme
          if (theme === 'dark') {
            selectedTheme = 'light'
          } else if (theme === 'light') {
            selectedTheme = 'navy'
          } else {
            selectedTheme = 'dark'
          }
          setTheme(selectedTheme)
        }}
      >
        {theme && themeIconMap[theme]}
      </button>
    </section>
  )
}
