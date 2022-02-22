import React, {useCallback, useEffect, useState} from 'react'
import type {NextComponentType} from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import * as S from './style'

const DynamicLottie = dynamic(() => import('react-lottie'))

const NotFoundContainer: NextComponentType = () => {
  const [animationData, setAnimationData] = useState()

  const dynamicAnimation = useCallback(async () => {
    const animation = await import(`../../../../public/lotties/not-found.json`)
    return animation
  }, [])

  useEffect(() => {
    dynamicAnimation().then(animation => setAnimationData(animation as any))
  }, [dynamicAnimation])

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
        <DynamicLottie
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
