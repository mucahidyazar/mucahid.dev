import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import type {NextComponentType} from 'next'
import * as S from './style'
import Slider from 'react-slick'

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
  const slickRef = useRef<Slider>(null)
  const settings = {
    infinite: true,
    arrows: false,
    dots: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  }

  return (
    <S.WelcomeContainer>
      <S.WelcomeBackgroundWrapper>
        <Slider ref={slickRef} {...settings}>
          {['team-1', 'team-2']?.map(item => (
            <S.WelcomeBackground key={item} background={item} />
          ))}
        </Slider>
      </S.WelcomeBackgroundWrapper>
      {/* <S.WelcomeIllustration>
        <Image
          src={`/illustrations/${illustration}.png`}
          layout="fill"
          objectFit="cover"
          alt="Home Illustration"
        />
      </S.WelcomeIllustration> */}
      <S.WelcomeContent>
        <S.WelcomeContentTitle>{title}</S.WelcomeContentTitle>
        <S.WelcomeContentDescription>{description}</S.WelcomeContentDescription>
      </S.WelcomeContent>
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
