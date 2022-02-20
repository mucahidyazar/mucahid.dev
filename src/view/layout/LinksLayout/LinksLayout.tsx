import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
// import io, {Socket} from 'socket.io-client'
import {useDispatch, useSelector} from 'react-redux'
import {i18n} from 'next-i18next'

import {ActiveUsers} from '@/components'
import {makeSelectActivePage, setTheme} from '@/store/settings'

import * as S from './style'

interface ILinksLayout {
  children: React.ReactNode
  title: string
  description: string
}

const LinksLayout: React.FC<ILinksLayout> = ({
  children,
  title,
  description,
}) => {
  const dispatch = useDispatch()
  const activePage = useSelector(makeSelectActivePage)
  const language = i18n?.language

  useEffect(() => {
    dispatch(setTheme())
  }, [dispatch])

  return (
    <S.LinksLayout>
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
      </Head>
      <S.LinksLayoutContent>{children}</S.LinksLayoutContent>
      <ActiveUsers />
    </S.LinksLayout>
  )
}

LinksLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

LinksLayout.defaultProps = {
  children: PropTypes.node,
}

export default LinksLayout
