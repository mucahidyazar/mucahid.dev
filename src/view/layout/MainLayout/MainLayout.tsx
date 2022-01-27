import React from 'react'
import PropTypes from 'prop-types'
import type {NextComponentType} from 'next'
import Head from 'next/head'
import {SubscribeBanner, Welcome} from '@/components/index'
import {Navbar, Footer} from '@/layout/index'
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
