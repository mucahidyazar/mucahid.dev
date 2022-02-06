import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import io from 'socket.io-client'
import {useDispatch} from 'react-redux'

import {ActiveUsers, SubscribeBanner, Welcome} from '@/components'
import {Navbar, Footer} from '@/layout'

import * as S from './style'
import {addActiveUser, removeActiveUser} from '@/store/general'

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
  const dispatch = useDispatch()
  const [socket, setSocket] = React.useState(null)

  useEffect(() => {
    if (!socket) {
      initSocket()
    }
  }, [socket])

  const initSocket = () => {
    let socket = io()

    // const {'CHAT_MESSAGE', 'ROOM_USERS'} = SOCKET_EVENTS

    // listens for incoming message from server
    // 1. chat messages
    socket.on('USER_CONNECTED', ({user}) => {
      dispatch(addActiveUser(user))
    })
    // 2. set room users
    socket.on('USER_DISCONNECTED', ({user}) => {
      dispatch(removeActiveUser(user))
    })

    console.log({socket})

    setSocket(socket)
  }

  return (
    <S.MainLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
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
  children: PropTypes.node,
  hasWelcome: true,
}

export default MainLayout
