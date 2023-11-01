import {Nanum_Brush_Script} from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import {Navbar} from '@/components/Navbar'
import {cn} from '@/utils'

const nanum = Nanum_Brush_Script({
  subsets: ['latin'],
  weight: ['400'],
})

export function Sidebar() {
  return (
    <section className="lg:left-[calc(50% + 200px)] mx-auto flex w-full flex-col px-4 pb-4 pt-8 lg:fixed lg:top-0 lg:h-full lg:max-h-[100vh] lg:min-h-[100vh] lg:w-[15rem] lg:min-w-[15rem] lg:pb-8 lg:pt-20">
      <aside className="flex flex-col items-center lg:items-start">
        <Link href="/">
          <Image
            src="/svg/full-logo.svg"
            alt="logo"
            width={120}
            height={40}
            className="mb-4 cursor-pointer"
          />
        </Link>
        <p
          className={cn(
            nanum.className,
            'mb-4 text-center text-xs uppercase text-gray-500 lg:mb-8 lg:text-left',
          )}
        >
          CONTEMPORARY OIL-FOCUSED PAINTER
        </p>
      </aside>
      <Navbar />
    </section>
  )
}
