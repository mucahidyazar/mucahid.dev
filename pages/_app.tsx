import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import {getSession, SessionProvider} from 'next-auth/react'
import {appWithTranslation} from 'next-i18next'
import {ToastContainer} from 'react-toastify'

import {PageLoading} from '@/components'
import {GlobalStyle} from '@/styles'
import {saveAuth} from '@/store/auth'
import {changeLanguage, makeSelectTheme, setActiveRoute} from '@/store/settings'

import {useTypedSelector, wrapper} from '../src/store'

const WrappedApp = ({Component, pageProps}: any) => {
  const theme = useTypedSelector(makeSelectTheme)

  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyle theme={theme} />
      <PageLoading />
      <ToastContainer />
    </SessionProvider>
  )
}

WrappedApp.getInitialProps = wrapper.getInitialAppProps(
  store =>
    async ({ctx}): Promise<any> => {
      const data = await getSession(ctx)
      const {locale} = ctx

      await store.dispatch(changeLanguage(locale as string) as any)
      await store.dispatch(setActiveRoute(ctx.pathname as string) as any)

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
