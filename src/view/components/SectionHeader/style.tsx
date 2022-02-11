import styled from 'styled-components'

const SectionHeader = styled.div`
  margin-bottom: 1.5rem;
`

const SectionHeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    min-width: max-content;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 0.25rem;
    }
  }
`

export {SectionHeader, SectionHeaderTop}
