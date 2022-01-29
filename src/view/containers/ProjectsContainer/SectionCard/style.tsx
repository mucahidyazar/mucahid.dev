import styled from 'styled-components'

import {Title, Subtitle} from '@/ui'

const SectionCard = styled.a`
  display: flex;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`
const SectionCardImage = styled.div`
  position: relative;
  width: 40px;
  min-width: 40px;
  height: 40px;
  transform: translateY(10px);
`
const SectionCardContent = styled.div``
const SectionCardTitle = styled(Title)``
const SectionCardSubtitle = styled(Subtitle)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export {
  SectionCard,
  SectionCardImage,
  SectionCardContent,
  SectionCardTitle,
  SectionCardSubtitle,
}
