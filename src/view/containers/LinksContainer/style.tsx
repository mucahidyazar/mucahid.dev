import styled from 'styled-components'

import {BreakpointSize} from '@/constants'

const LinksSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const ImageWrapperLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  background: linear-gradient(
    225deg,
    var(--color-primary) 0%,
    var(--color-pastel3) 100%
  );
  border-radius: 0.25rem;
  margin-bottom: 1rem;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    padding: 0.2rem;
    border-radius: 4px;
    margin-bottom: 8px;
  }
`
const ImageWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  padding: 30px;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    width: 120px;
    height: 120px;
  }
`
const Username = styled.div`
  margin-bottom: 1rem;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    margin-bottom: 8px;
    font-size: var(--font-size-s);
  }
`
const LinkCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

interface ILinkCard {
  backgroundColor: string
}
const LinkCard = styled.a<ILinkCard>`
  background-color: ${({backgroundColor}) => backgroundColor};
  border-radius: 4px;
  width: 336px;
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: pointer;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    width: 206px;
    padding: 6px;
    border-radius: 2px;
    border-width: 1px;
  }

  @keyframes linkCardAnimation {
    0% {
      transform: rotate(1deg) scale(1.02);
    }
    50% {
      transform: rotate(-1deg) scale(1.03);
    }
    100% {
      transform: rotate(0deg) scale(1.02);
    }
  }

  &:hover {
    animation: linkCardAnimation 0.5s ease-in-out infinite;
  }
`
const LinkCardImage = styled.div`
  position: relative;
  width: 32px;
  height: 32px;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    width: 20px;
    height: 20px;
  }
`
const LinkCardTitle = styled.div`
  margin: 0 auto;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    font-size: var(--font-size-s);
  }
`
const SocialIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const IconLink = styled.a`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: scale(1.4);
  }
`

export {
  LinksSection,
  ImageWrapperLayout,
  ImageWrapper,
  Username,
  LinkCardsWrapper,
  LinkCard,
  LinkCardImage,
  LinkCardTitle,
  SocialIconsWrapper,
  IconLink,
}
