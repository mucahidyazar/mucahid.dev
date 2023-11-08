/* eslint-disable @next/next/no-before-interactive-script-outside-document */
'use client'

import Script from 'next/script'
import {signIn} from 'next-auth/react'

import {OneTapComponent} from '@/components/molecules/OneTapComponent'
import {Button} from '@/components/ui/button'

export default function Component() {
  return (
    <div>
      <OneTapComponent />
      <section className="mx-auto mt-[30%] flex w-full flex-col gap-2 sm:w-80">
        <Button onClick={() => signIn('github')}>Sign in by Github</Button>
        <Button onClick={() => signIn('google')}>Sign in by Google</Button>
      </section>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="beforeInteractive"
      />
    </div>
  )
}
