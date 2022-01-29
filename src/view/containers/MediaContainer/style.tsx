import styled from 'styled-components'

import {BreakpointSize} from '@/constants'

const InstagramContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 0.25rem;
  height: calc(100% - 6.25rem);
  @media (max-width: ${BreakpointSize.TABLET.MAX}px) {
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
  overflow-y: scroll;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    height: 40rem;
  }
`

const StuffContainer = styled.div``
const StuffTitle = styled.div`
  margin-bottom: 0.5rem;
`
const StuffList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  grid-gap: 12px;

  margin-bottom: 5rem;
`

const SummarySection = styled.div`
  max-width: 100%;
  margin: 5rem 0;
`

export {
  InstagramContainer,
  InstagramImage,
  TwitterContainer,
  StuffContainer,
  StuffTitle,
  StuffList,
  SummarySection,
}
