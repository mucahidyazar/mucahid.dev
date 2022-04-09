import React, {useCallback, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useRouter} from 'next/router'
import {motion} from 'framer-motion'
import dynamic from 'next/dynamic'

import {AllNewsModal, NewsModal} from '@/modals'

import * as S from './style'

interface IWelcomeProps {
  title: string
  description: string
  illustration: string
}

const DynamicLottie: any = dynamic((): any => import('react-lottie'))

const Welcome: React.FC<IWelcomeProps> = ({title, description}) => {
  // const dispatch = useDispatch()
  // const allNews = useSelector(makeSelectAllNews)
  const router = useRouter()
  const [animationData, setAnimationData] = React.useState()

  // const openModalHandler = () => {
  //   dispatch(setModalType(ModalType.ALL_NEWS_MODAL))
  // }

  // const openNewsHandler = () => {
  //   dispatch(setModalType(ModalType.NEWS_MODAL))
  // }

  const dynamicAnimation = useCallback(async () => {
    const route = router.route === '/' ? '/home' : router.route
    const animation = await import(`../../../../public/lotties${route}.json`)
    return animation
  }, [router.route])

  useEffect(() => {
    dynamicAnimation().then(animation => setAnimationData(animation))
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

          <motion.div
            animate={{x: [-300, 0], opacity: [0, 1]}}
            transition={{duration: 1, delay: 0.5}}
          >
            <S.WelcomeContentTitle>{title}</S.WelcomeContentTitle>
          </motion.div>

          <motion.div
            animate={{x: [-300, 0], opacity: [0, 1]}}
            transition={{duration: 1, delay: 1}}
          >
            <S.WelcomeContentDescription>
              {description}
            </S.WelcomeContentDescription>
          </motion.div>
        </S.WelcomeContent>

        <motion.div
          animate={{x: [300, 0], opacity: [0, 1]}}
          transition={{duration: 1}}
        >
          <DynamicLottie
            options={defaultOptions}
            height={500}
            width="auto"
            isStopped={false}
            isPaused={false}
          />
        </motion.div>

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
