import styled, {css} from 'styled-components'

import {Subtitle, Title} from '@/ui'
// import {BreakpointSize} from '@/constants'

const HelpContainer = styled.div``
const HelpContainerTitle = styled(Title)`
  margin-bottom: 1rem;
  font-size: var(--font-size-4xl);
`
const HelpContainerDescription = styled(Subtitle)`
  margin-bottom: 10rem;
  font-size: var(--font-size);
`
const HelpContainerSection = styled.div`
  &:not(:last-child) {
    margin-bottom: 5rem;
  }
`
const HelpContainerSectionTitle = styled(Title)`
  font-size: var(--font-size-2xl);
  margin-bottom: 1rem;
  font-weight: 600;

  &:not(:first-child) {
    margin-top: 2rem;
  }

  ${({level}) => {
    if (level === 3) {
      return css`
        font-size: var(--font-size-xl);
        font-weight: 500;
      `
    }
    if (level === 4) {
      return css`
        font-size: var(--font-size);
      `
    }
  }}
`
const HelpContainerSectionQuestion = styled.p`
  &:not(:first-child) {
    margin-top: 1rem;
  }
`
const HelpContainerSectionDescription = styled(Subtitle)`
  font-size: var(--font-size);
`

const HelpContainerSectionList = styled.ul`
  padding: 1rem 2rem;
  list-style: square;
`
const HelpContainerSectionListItem = styled.li`
  margin-bottom: 0.5rem;
`
const HelpContainerSectionLink = styled.a``

export {
  HelpContainer,
  HelpContainerTitle,
  HelpContainerDescription,
  HelpContainerSection,
  HelpContainerSectionTitle,
  HelpContainerSectionQuestion,
  HelpContainerSectionDescription,
  HelpContainerSectionList,
  HelpContainerSectionListItem,
  HelpContainerSectionLink,
}
