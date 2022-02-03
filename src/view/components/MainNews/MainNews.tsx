import React from 'react'
import Image from 'next/image'

import * as S from './style'

const MainNews = ({onClick, rest}) => {
  return (
    <S.MainNews onClick={onClick} {...rest}>
      <S.MainNewsTitle>Bu Cuma evleniyorum</S.MainNewsTitle>
      <S.MainNewsDate>ISTANBUL - THURSDAY AUGUST 30, 1978</S.MainNewsDate>
      <S.MainNewsImage>
        <S.MainNewsFigure>
          <Image
            layout="fill"
            objectFit="cover"
            src="http://i.giphy.com/4fDWVPMoSyhgc.gif"
            alt="News Gif"
          />
          <S.MainNewsFigcaption>
            "This time, let go your conscious self and act on instinct."
          </S.MainNewsFigcaption>
        </S.MainNewsFigure>
      </S.MainNewsImage>
      <S.MainNewsContent>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo in
        fugiat ea ad, quod reiciendis deleniti minima tempora consequatur
        laboriosam sequi iure eum debitis consectetur molestiae alias fugit
        voluptates dolorem porro exercsam harum sunt facere libero sed
        asperiores culpa eaque beatae ipsa nam,imus assumenda ex eveniet
        voluptates consequatur officia vel rerum voluptatum optio corporis ullam
        voluptate in doloribus, commodi, ea dignissimos quo modi repellat. Quos
        ipsa suscipit id, aliquid modi voluptatem nostrum!
      </S.MainNewsContent>
    </S.MainNews>
  )
}

MainNews.propTypes = {}

MainNews.defaultProps = {}

MainNews.S = S

export default MainNews
