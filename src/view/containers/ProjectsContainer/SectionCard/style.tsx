import styled from 'styled-components'

import {Title, Subtitle} from '@/ui'
import {titleHover} from '@/styles'

const SectionCardImage = styled.div`
  position: relative;
  width: 40px;
  min-width: 40px;
  height: 40px;
  transform: translateY(10px);
`
const SectionCardContent = styled.div``
const SectionCardTitle = styled(Title)`
  width: max-content;
`
const SectionCardSubtitle = styled(Subtitle)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const SectionCard = styled.a`
  display: flex;
  gap: 1rem;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  &:hover ${SectionCardTitle} {
    ${titleHover}
  }
`

export {
  SectionCard,
  SectionCardImage,
  SectionCardContent,
  SectionCardTitle,
  SectionCardSubtitle,
}
