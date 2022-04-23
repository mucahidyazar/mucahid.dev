import React from 'react'
import Image from 'next/image'

import {setNews} from '@/store/home'
import {News} from '@/types'
import {useTypedDispatch} from '@/store/index'

import * as S from './style'

interface IOldNewsProps {
  news: News
  onClick?: any
  isModal?: boolean
}

const OldNews = ({news, onClick, isModal, ...rest}: IOldNewsProps) => {
  const dispatch = useTypedDispatch()
  const openNewsHandler = () => {
    if (!isModal) {
      dispatch(setNews(news))
      onClick()
    }
  }

  return (
    <S.OldNews {...rest} onClick={openNewsHandler}>
      <S.OldNewsImage>
        <S.OldNewsFigure>
          <Image
            width={80}
            height="100%"
            objectFit="cover"
            src={news.image}
            alt="News Gif"
          />
        </S.OldNewsFigure>
      </S.OldNewsImage>

      <S.OldNewsBody>
        <S.OldNewsTitle>{news.title}</S.OldNewsTitle>
        <S.OldNewsContent>{news.content}</S.OldNewsContent>
      </S.OldNewsBody>
    </S.OldNews>
  )
}

OldNews.propTypes = {}

OldNews.defaultProps = {}

OldNews.S = S

export default OldNews
