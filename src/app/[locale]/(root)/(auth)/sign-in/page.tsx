/* eslint-disable @next/next/no-before-interactive-script-outside-document */
'use client'

import {SignInForm} from '@/components/forms/sign-in-form'
import {AuthSection} from '@/components/molecules/auth-section'

export default function Component() {
  return (
    <>
      <SignInForm />
      <AuthSection />
    </>
  )
}
