import styled from 'styled-components'

import {BreakpointSize} from '@/constants'
import {Title} from '@/ui'

const OldNews = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 1rem 1rem 1rem;
  transition: all 0.2s ease-in-out;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  }

  &:hover {
    background: rgba(249, 247, 241, 0.2);
  }
`
const OldNewsImage = styled.div`
  position: relative;
  filter: grayscale(100%);
  overflow: hidden;
  width: 60px;
  height: 60px;
`
const OldNewsFigure = styled.figure``
const OldNewsBody = styled.div`
  width: 100%;
`
const OldNewsTitle = styled(Title)`
  color: #000;
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 140%;
`
const OldNewsContent = styled.p`
  font-size: var(--font-size-xs);
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 120%;
  cursor: default;
`

export {
  OldNews,
  OldNewsBody,
  OldNewsContent,
  OldNewsFigure,
  OldNewsImage,
  OldNewsTitle,
}
