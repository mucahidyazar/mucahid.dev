import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, {FC} from 'react'
import {AppProps} from 'next/app'
import {wrapper} from '../src/store'
import {GlobalStyle} from 'styles'

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
  <>
    <Component {...pageProps} />
    <GlobalStyle />
  </>
)

export default wrapper.withRedux(WrappedApp)
