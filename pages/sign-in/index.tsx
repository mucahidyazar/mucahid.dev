import React from 'react'
import type {NextPage} from 'next'
import {getCsrfToken} from 'next-auth/react'
import {getProviders} from 'next-auth/react'

import {MainLayout} from '@/layout'
import {SignInContainer} from '@/containers'
import {wrapper} from '@/store/index'

const SignIn: NextPage = ({csrfToken, providers}) => (
  <MainLayout
    title="Signed In"
    description="You can add comment and find some easter egg if you signed in :)"
  >
    <SignInContainer csrfToken={csrfToken} providers={providers} />
  </MainLayout>
)

// This is the recommended way for Next.js 9.3 or newer
export const getServerSideProps = wrapper.getServerSideProps(
  (): any => async context => {
    const csrfToken = await getCsrfToken(context)
    const providers = await getProviders()

    return {
      props: {csrfToken, providers},
    }
  },
)

export default SignIn
