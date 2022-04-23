import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
// import io, {Socket} from 'socket.io-client'
import {i18n} from 'next-i18next'

import {ActiveUsers, SubscribeBanner, Welcome} from '@/components'
import {Navbar, Footer} from '@/layout'
// import {addActiveUser, removeActiveUser} from '@/store/general'
import {makeSelectActivePage, setTheme} from '@/store/settings'
import {useTypedDispatch, useTypedSelector} from '@/store/index'

import * as S from './style'

interface IMainLayout {
  children: React.ReactNode
  title: string
  description: string
  hasWelcome?: boolean
}

const MainLayout: React.FC<IMainLayout> = ({
  children,
  title,
  description,
  hasWelcome,
}) => {
  const dispatch = useTypedDispatch()
  const activePage = useTypedSelector(makeSelectActivePage)
  const language = i18n?.language

  // const initSocket = useCallback(() => {
  //   let socket = io({
  //     path: '/api/socket',
  //   })

  //   // const {'CHAT_MESSAGE', 'ROOM_USERS'} = SOCKET_EVENTS

  //   // listens for incoming message from server
  //   // 1. chat messages
  //   socket.on('USER_CONNECTED', ({user}) => {
  //     dispatch(addActiveUser(user))
  //   })
  //   // 2. set room users
  //   socket.on('USER_DISCONNECTED', ({user}) => {
  //     dispatch(removeActiveUser(user))
  //   })

  //   setSocket(socket)
  // }, [dispatch])

  // useEffect(() => {
  //   if (!socket) {
  //     initSocket()
  //   }
  // }, [socket, initSocket])

  useEffect(() => {
    dispatch(setTheme())
  }, [dispatch])

  return (
    <S.MainLayout>
      <Head>
        <title>
          {title} | {activePage} | mucahid.dev
        </title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="author" content="Mucahid Yazar" />
        <meta name="copyright" content="Mucahid Yazar" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://mucahid.dev" />
        <link
          rel="alternate"
          hrefLang={language}
          href={`https://mucahid.dev/${language === 'en' ? '' : language}`}
        />
        <link
          rel="preload"
          href="/fonts/Proxima Nova Light.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/ProximaNovaCond-Thin.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Navbar />
      {hasWelcome && (
        <Welcome
          illustration="message"
          title={title}
          description={description}
        />
      )}
      <S.MainLayoutContent>{children}</S.MainLayoutContent>
      <SubscribeBanner />
      <Footer />
      <ActiveUsers />
    </S.MainLayout>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hasWelcome: PropTypes.bool,
}

MainLayout.defaultProps = {
  hasWelcome: true,
}

export default MainLayout
