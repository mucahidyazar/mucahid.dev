import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import type {AppProps, AppContext} from 'next/app'
import {getSession, SessionProvider} from 'next-auth/react'
import {useSelector} from 'react-redux'
import {appWithTranslation} from 'next-i18next'

import {PageLoading} from '@/components'
import {GlobalStyle} from '@/styles'
import {saveAuth} from '@/store/auth'
import {changeLanguage, makeSelectTheme} from '@/store/settings'

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
      store.dispatch(changeLanguage(ctx.locale))

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
          session: null,
        },
      }
    },
)

export default wrapper.withRedux(appWithTranslation(WrappedApp))
