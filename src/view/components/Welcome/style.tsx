import styled, {css} from 'styled-components'

import {BreakpointSize} from '@/constants'
import {container} from 'styles'

const WelcomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${container}
`

const WelcomeContentTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 2.5rem;
  line-height: 100%;
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

const WelcomeContentDescription = styled.div`
  line-height: var(--line-height-xl);
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

const WelcomeBackground = styled.div`
  ${({background}) => css`
    background-image: url('/images/me/${background}.jpg');
  `};
  background-repeat: no-repeat;
  background-size: cover;
`

export {
  WelcomeBackground,
  WelcomeContainer,
  WelcomeContent,
  WelcomeContentTitle,
  WelcomeContentDescription,
  WelcomeIllustration,
  WelcomeBackgroundWrapper,
}
