import styled from 'styled-components'

const WelcomeContainer = styled.div`
  display: flex;
  color: var(--color-white);
  margin-bottom: 10rem;
`

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

const WelcomeIllustration = styled.div``

export {
  WelcomeContainer,
  WelcomeContent,
  WelcomeContentTitle,
  WelcomeContentDescription,
  WelcomeIllustration,
}
