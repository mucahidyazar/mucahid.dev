import styled, {css} from 'styled-components'

import {BreakpointSize} from '@/constants'
import {Title} from '@/ui'
import {container} from '@/styles'
import {MainNews, OldNews} from '@/components'

const NewsHeader = styled.div`
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.1);
  padding: 10px 0;
  background: #f9f7f1;
  padding: 1rem 3rem 0;
  border-bottom: 1px solid #2f2f2f;
  color: #2f2f2f;
`
const NewsHeaderImage = styled.div`
  position: relative;
  height: 60px;
`

const NewsHeaderDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0 0.5rem;
  font-size: var(--font-size-s);
`
const NewsHeaderDate = styled.p``
const NewsHeaderMainTheme = styled.p`
  font-size: var(--font-size-l);
  text-transform: uppercase;
`
const NewsHeaderTotalNews = styled.p``

const ModalNews = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  background: #f9f7f1;
  color: #2f2f2f;
  padding: 2rem 3rem 2rem;
  grid-gap: 1rem;
  grid-row-gap: 4rem;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    grid-template-columns: 1fr;
  }

  ${MainNews.S.MainNews} {
    padding: 0;
    padding-right: 1rem;
    border-right: 1px solid #2f2f2f;
    grid-column: 1 / span 2;

    @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
      padding-right: 0;
      border-right: none;
    }
    @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
      grid-column: 1 / span 1;
    }

    ${MainNews.S.MainNewsTitle} {
      font-size: 60px;
    }

    ${MainNews.S.MainNewsDate} {
      font-size: 20px;
      margin-bottom: 1rem;
    }
    ${MainNews.S.MainNewsImage} {
      width: 100%;
      height: 200px;
      float: none;
      margin-bottom: 1rem;
    }
    ${MainNews.S.MainNewsContent} {
      font-size: 1rem;
      font-weight: 400;

      &::first-letter {
        color: tomato;
        padding: 0 0.3rem;
        margin: 0 0.3rem 0 0;
        border: 2px solid;
        border-radius: 2px;
        font-family: 'IBM Plex Mono', monospace;

        font-size: 5.5rem;
        float: left;
        line-height: 1;
      }
    }
  }
`

const ModalMainNews = styled(MainNews)``

const ModalOldNews = styled.div`
  padding: 0;
  height: max-content;
`
const ModalOldNewsTitle = styled(Title)`
  color: #2f2f2f;
  font-size: 1.6rem;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  text-transform: uppercase;
  text-align: center;
`
const ModalOldNewsDescription = styled.p`
  text-align: center;
  padding: 0.5rem 0;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: #000;
  }
`
const ModalOldNewsContent = styled.p`
  text-align: justify;
  font-size: 12px;
`

const ModalOldNewsDate = styled.p`
  font-size: 0.6rem;
  font-weight: 500;
  color: gray;
  text-align: right;
`

export {
  NewsHeader,
  NewsHeaderImage,
  NewsHeaderDescription,
  NewsHeaderDate,
  NewsHeaderMainTheme,
  NewsHeaderTotalNews,
  ModalMainNews,
  ModalOldNews,
  ModalNews,
  ModalOldNewsTitle,
  ModalOldNewsDescription,
  ModalOldNewsContent,
  ModalOldNewsDate,
}
