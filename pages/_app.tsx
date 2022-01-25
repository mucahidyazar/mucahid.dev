import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, {FC} from 'react'
import {AppProps} from 'next/app'
import {wrapper} from '../src/store'
import {GlobalStyle} from 'styles'
import {PageLoading} from '@/components/index'
import {setActiveRoute} from '@/store/settings'

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
      <PageLoading />
    </>
  )
}

// WrappedApp.getInitialProps = wrapper.getInitialAppProps(
//   store =>
//     async ({router}) => {
//       console.log({x: router.route})
//       await store.dispatch(setActiveRoute(router.route))
//     },
// )

export default wrapper.withRedux(WrappedApp)
