import styled from 'styled-components'
import {Title} from '@/ui/index'

const AboutWelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const AboutWelcomeProfile = styled.div`
  width: calc(30% - 1.25rem);
`
const AboutWelcomeImage = styled.div``
const AboutWelcomeSocials = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
const AboutWelcomeContent = styled.div`
  width: calc(70% - 1.25rem);
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
