import styled, {css} from 'styled-components'

import {BreakpointSize, ZIndex} from '@/constants'
import {Icon as StyledIcon} from '@/ui'
import {container} from '@/styles'

const WelcomeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${container}
  gap: 40px;
  position: relative;
  min-height: 500px;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    flex-direction: column;
  }

  & > div:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: ${ZIndex.WELCOME_LOTTIE};

    @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
      left;
      filter: blur(5px);
    }
  }
`
const WelcomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;

  @media (max-width: ${BreakpointSize.TABLET.MAX}px) {
    width: 70%;
  }

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 80%;
  }

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    width: 100%;
  }
`

const WelcomeTest = styled.h1`
  font-size: 10rem;
  color: var(--color-primary);
  font-weight: 600;
  letter-spacing: 2rem;
  text-transform: uppercase;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    font-size: 5rem;
    text-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.5);
    letter-spacing: 1rem;
  }

  @media (max-width: ${BreakpointSize.MOBILE.MIN}px) {
    font-size: 4rem;
  }
`
const WelcomeContentTitle = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  margin-bottom: 2.5rem;
  line-height: 130%;
  text-transform: uppercase;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    font-size: var(--font-size-2xl);
  }
`

const WelcomeContentDescription = styled.div`
  line-height: var(--line-height-xl);
  letter-spacing: 0.05rem;
  text-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 1);

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    font-size: var(--font-size);
  }

  &::first-letter {
    color: var(--color-primary);
    padding: 0 0.6rem;
    margin: 0 0.3rem 0 0;
    border: 2px solid;
    border-radius: 2px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 3rem;
    float: left;
    line-height: 1;
  }
`

const WelcomeIllustration = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
`

const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-white);
  width: 100%;
  min-height: 500px;
  margin-bottom: 10rem;
  position: relative;
  padding: 5rem 0;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    ${WelcomeIllustration} {
      display: none;
    }
  }

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    margin-bottom: 0;
  }
`

const WelcomeBackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  filter: opacity(0.2);

  * {
    height: 100%;
    width: 100%;
  }
`

interface IWelcomeBackgroundProps {
  background: string
}
const WelcomeBackground = styled.div<IWelcomeBackgroundProps>`
  ${({background}) => css`
    background-image: url('/images/me/${background}.jpg');
  `};
  background-repeat: no-repeat;
  background-size: cover;
`

const News = styled.div`
  width: 360px;
  height: min-content;
  color: var(--color-black);
  border-radius: 4px;
  cursor: pointer;
  background: rgba(249, 247, 241, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(249, 247, 241, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
  }

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 100%;
  }
`

const NewsHeader = styled.div`
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.1);
  padding: 10px 0;
`
const NewsHeaderImage = styled.div`
  position: relative;
  height: 40px;
`

const NewsList = styled.div`
  height: 278px;
  overflow-y: auto;
  padding: 2px;
`

const VideoWrapper = styled.div`
  width: 400px;
  height: 500px;
  position: relative;
`
const VideoOveryLay = styled.div`
  // rgba var(--color-primary) = rgba(233, 178, 88, 0.5)
  background-color: rgba(255, 255, 88, 0.5);
`
const VideoPlayIcon = styled.div`
  width: 100%;
  height: 100%;
`
const Video = styled.video``
const Icon = styled(StyledIcon)`
  width: 80px;
  height: 80px;
  max-width: 80px;
  max-height: 80px;
  min-width: 80px;
  min-height: 80px;
`

export {
  WelcomeBackground,
  WelcomeContainer,
  WelcomeSection,
  WelcomeContent,
  WelcomeContentTitle,
  WelcomeContentDescription,
  WelcomeIllustration,
  WelcomeBackgroundWrapper,
  News,
  NewsHeader,
  NewsHeaderImage,
  NewsList,
  WelcomeTest,
  VideoWrapper,
  VideoOveryLay,
  VideoPlayIcon,
  Video,
  Icon,
}
