import React, {useEffect} from 'react'
import Link from 'next/link'
import type {NextComponentType} from 'next'
import {useDispatch, useSelector} from 'react-redux'
import {useSession, signIn, signOut} from 'next-auth/react'

import {SectionHeader, SectionSlider, Sections, Section} from '@/components'
import {PostCard, Button} from '@/ui'
import {contributions, workshops} from '@/data'
import {
  getApis,
  getStarreds,
  makeSelectApis,
  makeSelectStarreds,
} from '@/store/projects'

import * as S from './style'
import {SectionCard} from './SectionCard'

const SignedInContainer: NextComponentType = ({csrfToken, providers}) => {
  const {data: session} = useSession()
  console.log(session)
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <form method="post" action="/api/auth/signin/email">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Email address
          <input type="email" id="email" name="email" />
        </label>
        <button type="submit">Sign in with Email</button>
      </form>

      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export default SignedInContainer

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await getCsrfToken(context)
  }
}
*/
