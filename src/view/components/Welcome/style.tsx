import styled from 'styled-components'
import {BreakpointSize} from '@/constants/index'

const WelcomeContent = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const WelcomeContentTitle = styled.h1`
  font-weight: bold;
`

const WelcomeContentDescription = styled.div`
  line-height: var(--line-height-xl);
`

const WelcomeIllustration = styled.div`
  position: relative;
  height: 600px;
  width: 600px;
`

const WelcomeContainer = styled.div`
  display: flex;
  color: var(--color-white);
  width: 100%;
  margin-bottom: 220px;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    margin-bottom: 50px;
  }

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    ${WelcomeIllustration} {
      display: none;
    }
  }
`

export {
  WelcomeContainer,
  WelcomeContent,
  WelcomeContentTitle,
  WelcomeContentDescription,
  WelcomeIllustration,
}
