'use client'

import Script from 'next/script'
import {signIn} from 'next-auth/react'
import {Suspense} from 'react'

import {Button} from '../ui/button'

import {OneTapComponent} from './OneTapComponent'

export function AuthSection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="mx-auto my-4 h-[1px] w-1/2 bg-gray-300" />

      <section className="flex w-full flex-col gap-2">
        <Button onClick={() => signIn('github')} size="sm">
          Sign in by Github
        </Button>
        <Button onClick={() => signIn('google')} size="sm">
          Sign in by Google
        </Button>
      </section>
      <OneTapComponent />
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="beforeInteractive"
      />
    </Suspense>
  )
}
