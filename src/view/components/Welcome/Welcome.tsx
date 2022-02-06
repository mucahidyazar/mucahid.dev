import React, {useCallback, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import Lottie from 'react-lottie'
import dynamic from 'next/dynamic'

import {ModalType} from '@/constants'
import {setModalType} from '@/store/settings'
import {AllNewsModal, NewsModal} from '@/modals'
import {makeSelectAllNews} from '@/store/home'

import {MainNews} from '../MainNews'
import {OldNews} from '../OldNews'

import * as S from './style'
import HomeAnimation from './lotties/media.json'

interface IWelcomeProps {
  title: string
  description: string
  illustration: string
}

const Welcome: React.FC<IWelcomeProps> = ({title, description}) => {
  const slickRef = useRef<Slider>(null)
  const dispatch = useDispatch()
  const allNews = useSelector(makeSelectAllNews)
  const router = useRouter()
  const [animation, setAnimation] = React.useState()

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

  const dynamicAnimation = useCallback(async () => {
    const route = router.route === '/' ? '/home' : router.route
    const animation = await import(`./lotties${route}.json`)
    return animation
  }, [router.route])

  useEffect(() => {
    dynamicAnimation().then(animation => setAnimation(animation))
  }, [dynamicAnimation])

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <S.WelcomeContainer>
      {/* <S.WelcomeBackgroundWrapper>
        <Slider ref={slickRef} {...settings}>
          {['team-1', 'team-2']?.map(item => (
            <S.WelcomeBackground key={item} background={item} />
          ))}
        </Slider>
      </S.WelcomeBackgroundWrapper> */}
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
          {/* <S.WelcomeTest>HELLO</S.WelcomeTest> */}
          <S.WelcomeContentTitle>{title}</S.WelcomeContentTitle>
          <S.WelcomeContentDescription>
            {description}
          </S.WelcomeContentDescription>
        </S.WelcomeContent>
        {animation && (
          <Lottie
            options={defaultOptions}
            height={500}
            width="auto"
            isStopped={false}
            isPaused={false}
          />
        )}
        {/* <S.WelcomeIllustration>
          <Image
            src="/gif/welcome/home.gif"
            layout="fill"
            objectFit="cover"
            alt="Home Illustration"
          />
        </S.WelcomeIllustration> */}
        {/* <S.News>
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
            {allNews?.map((news, index) => {
              if (index === 0)
                return (
                  <MainNews
                    key={news.id}
                    news={news}
                    onClick={openNewsHandler}
                  />
                )

              return (
                <OldNews key={news.id} news={news} onClick={openNewsHandler} />
              )
            })}
          </S.NewsList>
        </S.News> */}
        {/* <S.VideoWrapper>
          <S.VideoOveryLay>
            <S.VideoWrapper>
              <S.VideoPlayIcon>
                <S.Icon name="close" />
                <S.Video />
              </S.VideoPlayIcon>
            </S.VideoWrapper>
          </S.VideoOveryLay>
        </S.VideoWrapper> */}
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
