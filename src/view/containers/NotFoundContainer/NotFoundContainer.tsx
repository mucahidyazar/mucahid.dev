import React from 'react'
import type {NextComponentType} from 'next'
import Lottie from 'react-lottie'
import Link from 'next/link'

import * as S from './style'
import animationData from './not-found.json'

const NotFoundContainer: NextComponentType = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <S.NotFoundContainer>
      <S.LottieWrapper>
        <Lottie
          options={defaultOptions}
          width="100%"
          isStopped={false}
          isPaused={false}
        />
      </S.LottieWrapper>
      <Link href="/" passHref>
        <S.HomeButton>Home</S.HomeButton>
      </Link>
    </S.NotFoundContainer>
  )
}

export default NotFoundContainer
