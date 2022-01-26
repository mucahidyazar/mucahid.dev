import {Card} from '@/ui/index'
import styled from 'styled-components'
import {BreakpointSize} from '@/constants/index'

const Sections = styled.div`
  display: flex;
  gap: 80px;
  justify-content: space-between;
  margin: 15rem 0;

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

    &:hover::before {
      z-index: 1;
      content: 'Read More';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--font-size-xl);
      animation: fadeFromTop 0.5s ease-in-out;

      @keyframes fadeFromTop {
        0% {
          opacity: 0;
          transform: translateX(100%);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
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
