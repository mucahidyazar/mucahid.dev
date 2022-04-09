import styled from 'styled-components'

import {container} from '@/styles'

const LinksLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const LinksLayoutContent = styled.div`
  flex-grow: 1;
  ${container}
`

const NewsIcon = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 52px;
  height: 52px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.2;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`

const News = styled.div`
  position: fixed;
  bottom: 112px;
  right: 40px;
  width: 320px;
  border-radius: 8px;
  background: var(--color-primary);
`

const NoNews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
`
const NoNewsImage = styled.div`
  margin-bottom: 8px;
`
const NoNewsText = styled.p`
  font-size: var(--font-size-s);
  font-weight: 600;
`

const NewsList = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const NewsItem = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  color: var(--color-black);
  padding: 8px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
  }
`
const NewsItemTitle = styled.div``
const NewsItemDate = styled.div`
  font-size: var(--font-size-xs);
`

export {
  LinksLayout,
  LinksLayoutContent,
  NewsIcon,
  News,
  NoNews,
  NoNewsImage,
  NoNewsText,
  NewsList,
  NewsItem,
  NewsItemTitle,
  NewsItemDate,
}
