import styled from 'styled-components'
import {BreakpointSize} from '@/constants/index'

const WelcomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const WelcomeContentTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 2.5rem;
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
  margin-bottom: 15rem;
  position: relative;
  padding: 5rem 0;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    margin-bottom: 50px;
  }

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    ${WelcomeIllustration} {
      display: none;
    }
  }
`

const WelcomeBackground = styled.div`
  background-image: url('/images/me/team.jpeg');
  transform: translateX(-10%);
  width: 120%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  filter: opacity(0.2);
`

export {
  WelcomeBackground,
  WelcomeContainer,
  WelcomeContent,
  WelcomeContentTitle,
  WelcomeContentDescription,
  WelcomeIllustration,
}
