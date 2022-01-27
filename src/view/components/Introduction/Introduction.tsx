import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import * as S from './style'

interface IIntroduction {
  rightContent?: boolean
}

const Introduction: React.FC<IIntroduction> = ({rightContent}) => {
  return (
    <S.IntroductionContainer>
      <S.IntroductionContent rightContent={rightContent}>
        <S.IntroductionContentItem>
          <S.IntroductionContentTitle level={6}>
            What do you like?
          </S.IntroductionContentTitle>
          <S.IntroductionContentDescription>
            I like to play video games(especially rpg games), trekking,
            travelling. And I like cooking when I have enough time for it. As
            you know I am a Turkish guy so we have lots of delicious foods. I
            think it is the best and last thing about Turkey.
          </S.IntroductionContentDescription>
        </S.IntroductionContentItem>
        <S.IntroductionContentItem>
          <S.IntroductionContentTitle level={6}>
            What is your purpose? What do you want to do?
          </S.IntroductionContentTitle>
          <S.IntroductionContentDescription>
            Firstly being a good man. After that I want to improve my soft
            skills. Trying to be a good engineer. By this mission I am the one
            of them who is thinking studying during the life.
          </S.IntroductionContentDescription>
        </S.IntroductionContentItem>
      </S.IntroductionContent>

      <S.IntroductionPhoto>
        <Image
          src="/images/me/me-1.jpg"
          alt="Introduction Image"
          layout="fill"
          objectFit="cover"
        />
      </S.IntroductionPhoto>
    </S.IntroductionContainer>
  )
}

Introduction.propTypes = {
  rightContent: PropTypes.bool,
}

Introduction.defaultProps = {
  rightContent: false,
}

export default Introduction
