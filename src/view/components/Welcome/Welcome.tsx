import React from 'react'
import Image from 'next/image'
import type {NextComponentType} from 'next'
import * as S from './style'

const Welcome: NextComponentType = () => {
  return (
    <S.WelcomeContainer>
      <S.WelcomeContent>
        <S.WelcomeContentTitle>Hi there!</S.WelcomeContentTitle>
        <S.WelcomeContentDescription>
          How are you doing? Hope you having fun and like my website. I wanted
          to welcome you. How are you doing? Hope you having fun and like my
          website. I wanted to welcome you. How are you doing? Hope you having
          fun and like my website. I wanted to welcome you. How are you doing?
          Hope you having fun and like my website. I wanted to welcome you.
        </S.WelcomeContentDescription>
      </S.WelcomeContent>
      <S.WelcomeIllustration>
        <Image
          src="/images/home-illustration.png"
          width={600}
          height={600}
          alt="Home Illustration"
        />
      </S.WelcomeIllustration>
    </S.WelcomeContainer>
  )
}

export default Welcome
