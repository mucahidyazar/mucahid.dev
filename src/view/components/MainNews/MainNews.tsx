import React from 'react'
import Image from 'next/image'
import {useDispatch} from 'react-redux'

import {setNews} from '@/store/home'
import {News} from '@/types'

import * as S from './style'

interface IMainNewsProps {
  news: News
  onClick?: any
  isModal?: boolean
}

const MainNews = ({news, onClick, isModal, ...rest}: IMainNewsProps) => {
  const dispatch = useDispatch()
  const openNewsHandler = () => {
    if (!isModal) {
      dispatch(setNews(news))
      onClick()
    }
  }

  return (
    <S.MainNews {...rest} onClick={openNewsHandler}>
      <S.MainNewsTitle>{news.title}</S.MainNewsTitle>
      {/* <S.MainNewsDate>ISTANBUL - THURSDAY AUGUST 30, 1978</S.MainNewsDate> */}
      <S.MainNewsDate>{news.location}</S.MainNewsDate>
      <S.MainNewsImage>
        <S.MainNewsFigure>
          <Image
            layout="fill"
            objectFit="cover"
            src={news.image}
            alt="News Gif"
          />
          <S.MainNewsFigcaption>
            "This time, let go your conscious self and act on instinct."
          </S.MainNewsFigcaption>
        </S.MainNewsFigure>
      </S.MainNewsImage>
      <S.MainNewsContent>{news.content}</S.MainNewsContent>
    </S.MainNews>
  )
}

MainNews.propTypes = {}

MainNews.defaultProps = {}

MainNews.S = S

export default MainNews
