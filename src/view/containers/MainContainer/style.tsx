import styled from 'styled-components'

import {Icon} from '@/ui'

const MainContainer = styled.div`
  text-align: center;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
`

//! Brand
const BrandText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const BrandColor = styled.div`
  color: var(--color-primary);
`
const Brand = styled.div`
  font-size: var(--font-size-4xl);
  font-weight: 700;
  margin: 100px 0 40px;
`

const Slogan = styled.div`
  font-size: var(--font-size-2xl);
  font-weight: 200;
  font-family: 'ProximaNovaCond-Thin';
  margin-bottom: 40px;
`
const Intro = styled.div`
  width: 80%;
  margin: 0 auto 40px;
`
const IntroText = styled.h2`
  font-size: var(--font-size);
  font-family: 'ProximaNovaLight';
  line-height: var(--line-height-xl);

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const FindMeOn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'ProximaNovaCond-Thin';
  margin-bottom: 80px;
`
const FindMeOnText = styled.p`
  margin-right: 20px;
  font-size: var(--font-size-s);
`
const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`
const SocialLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40%;
    height: 1px;
    background-color: #dedee1;
    margin-top: 10px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: var(--color-primary);
  }

  &:hover::after {
    background-color: var(--color-primary);
    width: 100%;
  }
`
const SocialLinkText = styled.p`
  &:not(:last-child) {
    margin-right: 8px;
  }
`
const SocialLinkIcon = styled(Icon)`
  min-width: 6px;
  transform: translateY(-2px);
`

const Articles = styled.div``
const ArticlesLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`
const ArticlesLogo = styled.div`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`

const ArticlesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-gap: 20px;
  margin-bottom: 80px;
`
const Article = styled.div`
  background-color: rgba(65, 70, 108, 0.3);
  text-align: left;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: rgba(65, 70, 108, 0.4);
  }
`
const ArticleTitle = styled.div`
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
const ArticleDescription = styled.div`
  font-family: 'ProximaNovaCond-Thin';
  font-size: var(--font-size-s);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const BookMe = styled.div``
const BookMeTitle = styled.div`
  font-size: var(--font-size-xl);
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 20px;
`
const BookMeCalender = styled.div`
  border-radius: 12px;
  overflow: hidden;

  iframe {
    border: none !important;
  }
`

const PagesText = styled.div`
  margin-right: 20px;
  font-size: var(--font-size-s);
`
const PagesLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'ProximaNovaLight';
  gap: 12px;
  margin: 100px 0 20px;
`
const PagesLink = styled.div`
  cursor: pointer;
  color: var(--color-primary);

  &:hover {
    font-weight: 700;
  }
`

export {
  MainContainer,
  BrandText,
  BrandColor,
  Brand,
  Slogan,
  Intro,
  IntroText,
  FindMeOn,
  FindMeOnText,
  SocialLinks,
  SocialLink,
  SocialLinkText,
  SocialLinkIcon,
  Articles,
  ArticlesLogos,
  ArticlesLogo,
  ArticlesList,
  Article,
  ArticleTitle,
  ArticleDescription,
  BookMe,
  BookMeTitle,
  BookMeCalender,
  PagesText,
  PagesLinks,
  PagesLink,
}
