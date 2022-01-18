import {Card} from '@/ui/index'
import styled from 'styled-components'
import {BreakpointSize} from '@/constants/index'

const SectionsContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: space-between;
  margin: 5rem 0;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    /* padding: 5rem 0; */
  }

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    flex-direction: column;
  }
`

const SectionOneContainer = styled.div`
  width: 70%;

  @media (max-width: ${BreakpointSize.TABLET.MAX}px) {
    width: 60%;
  }

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 100%;
  }
`

const SectionTwoContainer = styled.div`
  width: 30%;

  @media (max-width: ${BreakpointSize.TABLET.MAX}px) {
    width: 40%;
  }

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 100%;
  }
`

const InstagramContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 0.25rem;
  height: calc(100% - 6.25rem);
  rem @media (max-width: ${BreakpointSize.TABLET.MAX}px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`
const InstagramImage = styled.div`
  position: relative;
  width: 100%;
  min-height: 320px;

  @media (max-width: ${BreakpointSize.TABLET.MAX}px) {
    min-height: 240px;
  }
`
const TwitterContainer = styled.div`
  background-color: var(--color-white);
  height: calc(100% - 6.25rem);

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    height: 40rem;
  }
`

const StuffContainer = styled.div``
const StuffTitle = styled.div``
const StuffList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const SummarySection = styled.div`
  max-width: 100%;
  margin: 5rem 0;
`

export {
  SectionsContainer,
  SectionOneContainer,
  SectionTwoContainer,
  InstagramContainer,
  InstagramImage,
  TwitterContainer,
  StuffContainer,
  StuffTitle,
  StuffList,
  SummarySection,
}
