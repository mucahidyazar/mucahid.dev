import React from 'react'
import type {NextPage} from 'next'
import {getCsrfToken, useSession} from 'next-auth/react'
import {getProviders} from 'next-auth/react'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

import {wrapper} from '@/store/index'
import {MainLayout} from '@/layout'
import {SignInContainer} from '@/containers'

const SignIn: NextPage = ({csrfToken, providers}: any) => {
  const {data: session} = useSession()

  return (
    <MainLayout
      title="Signed In"
      description="You can add comment and find some easter egg if you signed in :)"
      hasWelcome={false}
    >
      {!session && (
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
      )}
      <SignInContainer csrfToken={csrfToken} providers={providers} />
    </MainLayout>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export const getServerSideProps = wrapper.getServerSideProps(
  () => async context => {
    const {locale}: any = context
    const csrfToken = await getCsrfToken(context)
    const providers = await getProviders()

    return {
      props: {
        csrfToken,
        providers,
        ...(await serverSideTranslations(locale, ['common'])),
      },
    }
  },
)

export default SignIn
