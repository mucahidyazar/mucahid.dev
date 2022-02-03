import styled from 'styled-components'

import {Title} from '@/ui'
import {BreakpointSize} from '@/constants'

const Article = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;

  &:not(:last-child) {
    border-bottom: 1px solid #87878d;
  }
`
const ArticleBody = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const ArticleDate = styled.div`
  width: 10rem;
  color: #87878d;
  font-size: var(--font-size-s);

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    order: 2;
    width: auto;
  }
`
const ArticleTitle = styled.a`
  font-size: var(--font-size-xl);
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    position: relative;

    @keyframes expansing {
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 10px;
      left: 0;
      height: 20px;
      background-color: #e9b258;
      z-index: -1;
      transform: rotateZ(-2deg);
      animation: expansing 0.5s ease-in-out forwards;
    }
  }
`
const ArticleGo = styled.div`
  @keyframes circle {
    0% {
    }
    100% {
      border: 1px solid #e9b258;
    }
  }

  color: #e9b258;
  cursor: pointer;
`

const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin: 0 0 10rem;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    flex-direction: column;
  }
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 100%;
    height: max-content;
    flex-direction: row;
    align-items: center;
  }
`
const SectionType = styled(Title)`
  font-size: var(--font-size-l);
  color: #87878d;
  margin-bottom: 1rem;
`
const Articles = styled.div`
  width: 50%;
  height: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 100%;
  }
`
const SectionHeader = styled.div``
const SectionTitle = styled.div`
  font-size: var(--font-size-3xl);
  margin-bottom: 2rem;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    margin-bottom: 0;
    font-size: var(--font-size-2xl);
  }
`
const SectionDescription = styled.div`
  color: #9f9fa5;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    font-size: var(--font-size-s);
  }
`
const SectionButton = styled.div`
  margin-top: auto;
  font-size: var(--font-size-2xl);
  color: #e9b258;
  cursor: pointer;
  position: relative;
  width: max-content;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    align-self: flex-end;
  }

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    font-size: var(--font-size-l);
    min-width: max-content;
    margin-top: 0;
    align-self: flex-start;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 2rem;
    height: 2px;
    background-color: #e9b258;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`

const Content = styled.div`
  width: 50%;
  height: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 100%;
    height: auto;
  }
`
const ContentTitle = styled.div`
  font-size: var(--font-size-3xl);
  line-height: 120%;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    font-size: var(--font-size-2xl);
    margin-bottom: 1rem;
  }
`
const ContentDescription = styled.div`
  color: #9f9fa5;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    margin-bottom: 1rem;
  }
  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    font-size: var(--font-size-s);
    margin-bottom: 1rem;
  }
`
const ContentDetails = styled.div`
  display: flex;
  gap: 60px;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    justify-content: space-evenly;
    gap: 0;
  }
`
const ContentDetailsItem = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`
const ContentDetailsNumber = styled.div`
  font-size: var(--font-size-5xl);
  color: #e9b258;
  line-height: 100%;
  font-weight: 500;
`
const ContentDetailsText = styled.div`
  align-self: flex-end;
`

const Logos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  transform: translateY(-5rem);
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    transform: translateY(0);
    margin-bottom: 50px;
  }
`
const Logo = styled.div`
  filter: blur(4px) saturate(0.5);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: blur(0) saturate(1);
    transform: scale(1.1);
  }
`

export {
  Article,
  ArticleBody,
  ArticleDate,
  ArticleTitle,
  ArticleGo,
  SectionWrapper,
  Section,
  SectionHeader,
  SectionType,
  SectionTitle,
  Articles,
  SectionDescription,
  SectionButton,
  //
  Content,
  ContentTitle,
  ContentDescription,
  ContentDetails,
  ContentDetailsItem,
  ContentDetailsNumber,
  ContentDetailsText,
  //
  Logos,
  Logo,
}
