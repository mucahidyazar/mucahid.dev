import {Card} from '@/ui/index'
import styled from 'styled-components'
import {BreakpointSize} from '@/constants/index'

const Sections = styled.div`
  display: flex;
  gap: 80px;
  justify-content: space-between;
  margin: 10rem 0;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    margin: 5rem 0;
  }

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    flex-direction: column;
  }

  ${Card.S.CardImage} {
    min-width: 20%;
  }
  ${Card.S.Card} {
    gap: 20px;
    position: relative;
    cursor: pointer;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(62, 76, 103, 0.5);
    }
  }
  ${Card.S.CardContentText} {
    -webkit-line-clamp: 2;
  }
`

const SectionOne = styled.div`
  width: calc(50% - 40px);

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 100%;
  }
`

const SectionTwo = styled.div`
  width: calc(50% - 40px);

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 100%;
  }
`

export {Sections, SectionOne, SectionTwo}
