import styled from 'styled-components'
import {BreakpointSize} from '@/constants/index'
import {Title} from '@/ui/index'

const AboutWelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 220px;

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

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 100%;
    height: 200px;
  }
`
const AboutWelcomeSocials = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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

export {
  AboutWelcomeContainer,
  AboutWelcomeProfile,
  AboutWelcomeImage,
  AboutWelcomeSocials,
  AboutWelcomeContent,
  AboutWelcomeContentTitle,
  AboutWelcomeContentDescription,
  AboutWelcomeButtons,
}
