import styled, {css} from 'styled-components'

import {BreakpointSize} from '@/constants'
import {Title} from '@/ui'
import {container} from '@/styles'

import {MainNews} from '../MainNews'
import {OldNews} from '../OldNews'

const WelcomeSection = styled.section`
  display: flex;
  justify-content: space-between;
  ${container}
  gap: 40px;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    flex-direction: column;
  }
`
const WelcomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

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

const WelcomeContentTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 2.5rem;
  line-height: 100%;
`

const WelcomeContentDescription = styled.div`
  line-height: var(--line-height-xl);
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
    margin-bottom: 50px;
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
  color: #000;
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
}
