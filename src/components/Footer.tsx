import {useTranslations} from 'next-intl'

import {LINKS} from '@/mocks'
import {cn} from '@/utils'

import {AppTools} from './molecules/AppTools'
import {Icons} from './ui/icons'

type FooterProps = {
  className?: string
}
export function Footer({className}: FooterProps) {
  const t = useTranslations()

  return (
    <footer
      className={cn(
        'text-xs text-gray-400 hidden lg:flex lg:flex-col lg:gap-2',
        className,
      )}
    >
      <AppTools className="static lg:hidden" />
      <div className="flex gap-4">
        {LINKS.map(link => {
          const IconComponent = (Icons as any)[link?.icon]
          return (
            <a
              key={link.icon}
              href={link.url}
              className="flex items-center gap-2 hover:scale-125 transition-all duration-300 ease-in-out hover:text-primary-900"
            >
              {IconComponent && <IconComponent className="w-4" />}
            </a>
          )
        })}
      </div>
      <p>
        © {t('copyRight', {year: new Date().getFullYear()})}{' '}
        {/* <a
          href="https://mucahid.dev"
          target="_blank"
          rel="noreferrer"
          className="inline"
        >
          <span className="text-primary-500 text-opacity-50">mucahid.dev</span>
        </a> */}
      </p>
    </footer>
  )
}
