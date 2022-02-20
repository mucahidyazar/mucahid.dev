import styled from 'styled-components'

import {BreakpointSize} from '@/constants'
import {Title} from '@/ui'

const AboutWelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`
const AboutWelcomeProfile = styled.div`
  width: 440px;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 100%;
  }
`
const AboutWelcomeImage = styled.div`
  width: 440px;
  height: 440px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  filter: grayscale(1);

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 100%;
    height: 200px;
  }
`

const AboutWelcomeContent = styled.div`
  width: calc(100% - 500px);

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 100%;
  }
`
const AboutWelcomeContentTitle = styled(Title)`
  margin-bottom: 1rem;
`
const AboutWelcomeContentDescription = styled.div`
  margin-bottom: 1rem;
`

const AboutWelcomeButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
const AboutWelcomeLink = styled.a``

export {
  AboutWelcomeContainer,
  AboutWelcomeProfile,
  AboutWelcomeImage,
  AboutWelcomeContent,
  AboutWelcomeContentTitle,
  AboutWelcomeContentDescription,
  AboutWelcomeButtons,
  AboutWelcomeLink,
}
