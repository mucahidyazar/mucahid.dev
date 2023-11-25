/* eslint-disable @next/next/no-before-interactive-script-outside-document */
'use client'

import Script from 'next/script'

import {SignInForm} from '@/components/forms/sign-in-form'
import {AuthSection} from '@/components/molecules/auth-section'

export default function Component() {
  return (
    <>
      <SignInForm />
      <AuthSection />
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="beforeInteractive"
      />
    </>
  )
}
