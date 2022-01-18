import {Card} from '@/ui/index'
import styled from 'styled-components'
import {BreakpointSize} from '@/constants/index'

const ExperiencesSection = styled.div``

const FiltersSection = styled.div``
const FilterByLabel = styled.p`
  margin-bottom: 1rem;
`
const FiltersTags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`
const ArticlesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  grid-gap: 5rem;
  margin-bottom: 2rem;
`

export {
  ExperiencesSection,
  FiltersSection,
  FiltersTags,
  FilterByLabel,
  ArticlesSection,
}
