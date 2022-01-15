import React from 'react'
import type {NextComponentType} from 'next'
import Image from 'next/image'
import * as S from './style'

const Introduction: NextComponentType = () => {
  return (
    <S.IntroductionContainer>
      <S.IntroductionContent>
        <S.IntroductionContentItem>
          <S.IntroductionContentTitle>Self Taughing</S.IntroductionContentTitle>
          <S.IntroductionContentDescription>
            I am a self-taughing person. I just fnished... Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Et tortor eu non integer. Sit
            arcu duis nec nulla nunc.
          </S.IntroductionContentDescription>
        </S.IntroductionContentItem>
        <S.IntroductionContentItem>
          <S.IntroductionContentTitle>Self Taughing</S.IntroductionContentTitle>
          <S.IntroductionContentDescription>
            I am a self-taughing person. I just fnished... Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Et tortor eu non integer. Sit
            arcu duis nec nulla nunc.
          </S.IntroductionContentDescription>
        </S.IntroductionContentItem>
      </S.IntroductionContent>

      <S.IntroductionPhoto>
        <Image
          src="/images/introduction-image-1.jpg"
          width="680"
          height="800"
          alt="Introduction Image"
        />
      </S.IntroductionPhoto>
    </S.IntroductionContainer>
  )
}

export default Introduction
