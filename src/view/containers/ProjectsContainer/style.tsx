import styled from 'styled-components'

import {BreakpointSize} from '@/constants'
import {PostCard as StyledPostCard} from '@/ui'

const SummarySection = styled.div`
  max-width: 100%;
`

const ExperiencesSection = styled.div`
  margin-bottom: 10rem;
`
const WorkshopsSection = styled.div`
  margin: 10rem 0;
`

const PostCard = styled(StyledPostCard)``

const WorkshopsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  grid-gap: 5rem;
  margin-bottom: 2rem;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`

const SectionCards = styled.div`
  height: 600px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export {
  SummarySection,
  ExperiencesSection,
  WorkshopsSection,
  WorkshopsList,
  PostCard,
  SectionCards,
}
