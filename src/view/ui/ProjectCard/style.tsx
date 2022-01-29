import styled from 'styled-components'

import {Subtitle} from '../Typography'

const ProjectCard = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  }
`
const ProjectCardImage = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  width: 100%;
  height: 440px;
  transition: all 0.3s ease;

  & img {
    transition: all 0.3s ease;
  }

  &:hover {
    & img {
      object-position: bottom center !important;
    }
  }
`
const ProjectCardContent = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProjectCardLeft = styled.div`
  width: 22%;
`
const ProjectCardRight = styled.div`
  width: 76%;
`
const ProjectCardItem = styled.div`
  margin-bottom: 0.5rem;
`
const ProjectCardLabel = styled(Subtitle)``
const ProjectCardText = styled.div``
const ProjectCardTags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.2rem;
`

export {
  ProjectCard,
  ProjectCardImage,
  ProjectCardContent,
  ProjectCardLeft,
  ProjectCardRight,
  ProjectCardItem,
  ProjectCardLabel,
  ProjectCardText,
  ProjectCardTags,
}
