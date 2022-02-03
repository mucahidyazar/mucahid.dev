import React from 'react'
import Image from 'next/image'

import * as S from './style'

const OldNews = () => {
  return (
    <S.OldNews>
      <S.OldNewsImage>
        <S.OldNewsFigure>
          <Image
            width={80}
            height="100%"
            objectFit="cover"
            src="http://i.giphy.com/4fDWVPMoSyhgc.gif"
            alt="News Gif"
          />
        </S.OldNewsFigure>
      </S.OldNewsImage>

      <S.OldNewsBody>
        <S.OldNewsTitle>Evleniyorum</S.OldNewsTitle>
        <S.OldNewsContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Minus nihil dolor iure
          odit ex aliquid consequuntur doloremque eos libero molestias!
        </S.OldNewsContent>
      </S.OldNewsBody>
    </S.OldNews>
  )
}

OldNews.propTypes = {}

OldNews.defaultProps = {}

OldNews.S = S

export default OldNews
