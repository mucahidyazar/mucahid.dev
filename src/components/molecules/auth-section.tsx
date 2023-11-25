'use client'

import {signIn} from 'next-auth/react'
import {Suspense} from 'react'

import {Button} from '../ui/button'

import {OneTapComponent} from './OneTapComponent'

export function AuthSection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="flex w-full flex-col gap-2">
        <Button onClick={() => signIn('github')} size="sm">
          Sign in by Github
        </Button>
        <Button onClick={() => signIn('google')} size="sm">
          Sign in by Google
        </Button>
      </section>
      <OneTapComponent />
    </Suspense>
  )
}
