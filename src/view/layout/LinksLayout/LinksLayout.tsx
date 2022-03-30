import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Image from 'next/image'
// import io, {Socket} from 'socket.io-client'
import {useDispatch, useSelector} from 'react-redux'
import {i18n} from 'next-i18next'

import {getAllNews, makeSelectAllNews} from '@/store/home'
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
  const news = useSelector(makeSelectAllNews)
  const language = i18n?.language
  const [isOpen, setIsOpen] = React.useState(false)

  useEffect(() => {
    dispatch(setTheme())
    dispatch(getAllNews())
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
      <S.NewsIcon onClick={() => setIsOpen(prev => !prev)}>
        <Image
          src={`/images/others/${isOpen ? 'closed' : 'open'}-newspaper.png`}
          alt="news"
          width={32}
          height={32}
        />
      </S.NewsIcon>
      {isOpen && (
        <S.News>
          {news.length ? (
            <S.NewsList>
              {news.map(item => (
                <S.NewsItem key={item.id}>
                  <S.NewsItemTitle>{item.title}</S.NewsItemTitle>
                  <S.NewsItemDate>{item.createdAt}</S.NewsItemDate>
                </S.NewsItem>
              ))}
            </S.NewsList>
          ) : (
            <S.NoNews>
              <S.NoNewsImage>
                <Image
                  src="/images/others/open-newspaper.png"
                  alt="news"
                  width={60}
                  height={60}
                />
              </S.NoNewsImage>
              <S.NoNewsText>There is no news at the moment.</S.NoNewsText>
            </S.NoNews>
          )}
        </S.News>
      )}
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
