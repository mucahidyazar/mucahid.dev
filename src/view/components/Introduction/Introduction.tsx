import React from 'react'
import type {NextComponentType} from 'next'
import Image from 'next/image'
import * as S from './style'

const Introduction: NextComponentType = ({rightContent}) => {
  return (
    <S.IntroductionContainer>
      <S.IntroductionContent rightContent={rightContent}>
        <S.IntroductionContentItem>
          <S.IntroductionContentTitle level={4}>
            Self Taughing
          </S.IntroductionContentTitle>
          <S.IntroductionContentDescription>
            I am a self-taughing person. I just fnished... Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Et tortor eu non integer. Sit
            arcu duis nec nulla nunc.
          </S.IntroductionContentDescription>
        </S.IntroductionContentItem>
        <S.IntroductionContentItem>
          <S.IntroductionContentTitle level={4}>
            Self Taughing
          </S.IntroductionContentTitle>
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
          width={1020}
          height={1200}
          alt="Introduction Image"
        />
      </S.IntroductionPhoto>
    </S.IntroductionContainer>
  )
}

export default Introduction
