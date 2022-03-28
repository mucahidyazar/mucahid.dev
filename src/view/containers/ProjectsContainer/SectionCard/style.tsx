import styled from 'styled-components'

import {Title, Subtitle, Icon} from '@/ui'
import {titleHover} from '@/styles'

const SectionCardIcon = styled(Icon)`
  min-width: 40px;
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
  SectionCardIcon,
  SectionCard,
  SectionCardContent,
  SectionCardTitle,
  SectionCardSubtitle,
}
