import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import type {NextComponentType} from 'next'
import * as S from './style'

interface IWelcomeProps {
  title: string
  description: string
  illustration: string
}

const Welcome: React.FC<IWelcomeProps> = ({
  title,
  description,
  illustration,
}) => {
  return (
    <S.WelcomeContainer>
      <S.WelcomeContent>
        <S.WelcomeContentTitle>{title}</S.WelcomeContentTitle>
        <S.WelcomeContentDescription>{description}</S.WelcomeContentDescription>
      </S.WelcomeContent>
      <S.WelcomeIllustration>
        <Image
          src={`/illustrations/${illustration}.png`}
          layout="fill"
          alt="Home Illustration"
        />
      </S.WelcomeIllustration>
    </S.WelcomeContainer>
  )
}

Welcome.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  illustration: PropTypes.string.isRequired,
}

Welcome.defaultProps = {}

export default Welcome
