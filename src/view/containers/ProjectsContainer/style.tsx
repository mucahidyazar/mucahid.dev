import styled from 'styled-components'

const SummarySection = styled.div`
  max-width: 100%;
`

const ExperiencesSection = styled.div`
  margin: 15rem 0;
`
const WorkshopsSection = styled.div`
  margin: 15rem 0;
`

const WorkshopsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  grid-gap: 5rem;
  margin-bottom: 2rem;
`

export {SummarySection, ExperiencesSection, WorkshopsSection, WorkshopsList}
