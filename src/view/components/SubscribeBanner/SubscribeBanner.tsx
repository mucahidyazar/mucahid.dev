import React from 'react'
import Image from 'next/image'
import type {NextComponentType} from 'next'

import * as S from './style'

const SubscribeBanner: NextComponentType = () => {
  return (
    <S.SubscribeBannerContainer>
      <S.SubscribeBannerLeft>
        <S.SubscribeBannerTopTitle level={6}>
          BOOST YOUR FRONTEND CAREER
        </S.SubscribeBannerTopTitle>
        <S.SubscribeBannerBottomTitle level={6}>
          THE FRONTEND DEVELOPER
        </S.SubscribeBannerBottomTitle>
      </S.SubscribeBannerLeft>

      <S.SubscribeBannerRight>
        <S.SubscribeBannerInput placeholder="Name" />
        <S.SubscribeBannerInput placeholder="Email" />
        <S.SubscribeBannerButton>
          <S.SubscribeBannerButtonText>Subscribe</S.SubscribeBannerButtonText>
          <Image
            src="/svgs/mail-icon.svg"
            alt="mail-icon"
            width={24}
            height={24}
          />
        </S.SubscribeBannerButton>
      </S.SubscribeBannerRight>
    </S.SubscribeBannerContainer>
  )
}

SubscribeBanner.propTypes = {}

SubscribeBanner.defaultProps = {}

export default SubscribeBanner
