import {Card} from '@/ui/index'
import styled from 'styled-components'
import {BreakpointSize} from '@/constants/index'

const ExperiencesSection = styled.div``

const TechnologiesSection = styled.div`
  margin: 5rem 0;
`
const TechnologiesTags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`
const QuotesSection = styled.div`
  margin: 5rem 0;
`

const ProjectCardsSection = styled.div`
  margin: 5rem 0;
`
const ProjectCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export {
  ExperiencesSection,
  TechnologiesSection,
  TechnologiesTags,
  QuotesSection,
  ProjectCardsSection,
  ProjectCards,
}
