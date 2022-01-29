import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, {FC} from 'react'
import {AppProps} from 'next/app'

import {PageLoading} from '@/components'
import {GlobalStyle} from 'styles'

import {wrapper} from '../src/store'

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
  <>
    <Component {...pageProps} />
    <GlobalStyle />
    <PageLoading />
  </>
)

// WrappedApp.getInitialProps = wrapper.getInitialAppProps(
//   store =>
//     async ({router}) => {
//       console.log({x: router.route})
//       await store.dispatch(setActiveRoute(router.route))
//     },
// )

export default wrapper.withRedux(WrappedApp)
