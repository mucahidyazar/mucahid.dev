import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import type {AppProps, AppContext} from 'next/app'
import {getSession, SessionProvider} from 'next-auth/react'
import {useSelector} from 'react-redux'

import {PageLoading} from '@/components'
import {GlobalStyle} from '@/styles'
import {saveAuth} from '@/store/auth'
import {makeSelectTheme} from '@/store/settings'

import {wrapper} from '../src/store'

const WrappedApp = ({Component, pageProps}: AppProps) => {
  const theme = useSelector(makeSelectTheme)

  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyle theme={theme} />
      <PageLoading />
    </SessionProvider>
  )
}

WrappedApp.getInitialProps = wrapper.getInitialAppProps(
  store =>
    async ({ctx}: AppContext): Promise<any> => {
      const data = await getSession(ctx)

      if (data) {
        await store.dispatch(saveAuth(data as any))
        return {
          pageProps: {
            session: data,
          },
        }
      }

      return {
        pageProps: {
          session: {
            user: null,
            espires: null,
          },
        },
      }
    },
)

export default wrapper.withRedux(WrappedApp)
