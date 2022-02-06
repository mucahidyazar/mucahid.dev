import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, {FC} from 'react'
import {AppProps} from 'next/app'
import {getSession, SessionProvider} from 'next-auth/react'
import {useSelector} from 'react-redux'

import {PageLoading} from '@/components'
import {GlobalStyle} from '@/styles'
import {saveAuth} from '@/store/auth'
import {makeSelectTheme} from '@/store/settings'

import {wrapper} from '../src/store'

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => {
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
  store => async (ctx: any) => {
    const data = await getSession(ctx)

    if (data) {
      await store.dispatch(saveAuth(data))
      return {
        pageProps: {
          session: data,
        },
      }
    }
  },
)

export default wrapper.withRedux(WrappedApp)
