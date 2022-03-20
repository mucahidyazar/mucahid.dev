import styled from 'styled-components'

import {Title} from '@/ui'
import {BreakpointSize} from '@/constants'

const Article = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-dark);
  }
`
const ArticleBody = styled.div`
  display: flex;
  align-items: center;
  width: 85%;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const ArticleDate = styled.div`
  width: 5rem;
  min-width: 5rem;
  margin-right: 1rem;
  color: var(--color-gray-dark);
  font-size: var(--font-size-s);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    order: 2;
    width: auto;
    min-width: auto;
  }
`
const ArticleTitle = styled.a`
  font-size: var(--font-size-xl);
  transition: all 0.3s ease;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

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
      background-color: var(--color-primary);
      z-index: -1;
      transform: rotateZ(-2deg);
      animation: expansing 0.5s ease-in-out forwards;
    }
  }
`
const ArticleGo = styled.div`
  width: 10%;

  @keyframes circle {
    0% {
    }
    100% {
      border: 1px solid var(--color-primary);
    }
  }

  color: var(--color-primary);
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
  color: var(--color-gray-dark);
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
  color: var(--color-gray);

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    font-size: var(--font-size-s);
  }
`
const SectionButton = styled.div`
  margin-top: auto;
  font-size: var(--font-size-2xl);
  color: var(--color-primary);
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
    background-color: var(--color-primary);
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
  color: var(--color-gray);

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
  color: var(--color-primary);
  line-height: 100%;
  font-weight: 500;
`
const ContentDetailsText = styled.div`
  align-self: flex-end;
`

const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  overflow-x: auto;
  margin-bottom: 10rem;
  padding: 1.25rem 0;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    gap: 2rem;
  }
`
const Logo = styled.div`
  filter: blur(1px) saturate(0.5);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  min-width: 100px;
  min-height: 100px;
  border-radius: 12px;
  overflow: hidden;

  &:hover {
    filter: blur(0) saturate(1);
    transform: scale(1.4);
  }

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    &:first-child:hover {
      transform: scale(1.1) translateX(10%);
    }
    &:last-child:hover {
      transform: scale(1.1) translateX(-10%);
    }
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
