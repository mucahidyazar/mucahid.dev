import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import Image from 'next/image'
import {useDispatch} from 'react-redux'

import {ModalType} from '@/constants'
import {setModalType} from '@/store/settings'
import {AllNewsModal, NewsModal} from '@/modals'

import {MainNews} from '../MainNews'
import {OldNews} from '../OldNews'

import * as S from './style'

interface IWelcomeProps {
  title: string
  description: string
  illustration: string
}

const Welcome: React.FC<IWelcomeProps> = ({title, description}) => {
  const slickRef = useRef<Slider>(null)
  const dispatch = useDispatch()

  const openModalHandler = () => {
    dispatch(setModalType(ModalType.ALL_NEWS_MODAL))
  }

  const openNewsHandler = () => {
    dispatch(setModalType(ModalType.NEWS_MODAL))
  }

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
      <S.WelcomeSection>
        <S.WelcomeContent>
          <S.WelcomeContentTitle>{title}</S.WelcomeContentTitle>
          <S.WelcomeContentDescription>
            {description}
          </S.WelcomeContentDescription>
        </S.WelcomeContent>
        <S.News>
          <S.NewsHeader onClick={openModalHandler}>
            <S.NewsHeaderImage>
              <Image
                src="/svgs/thenewyorktimes.svg"
                alt="The New York Times"
                layout="fill"
              />
            </S.NewsHeaderImage>
          </S.NewsHeader>

          <S.NewsList>
            <MainNews onClick={openNewsHandler} />
            <OldNews />
          </S.NewsList>
        </S.News>
        <AllNewsModal />
        <NewsModal />
      </S.WelcomeSection>
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
