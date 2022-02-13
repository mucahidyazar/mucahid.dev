import styled from 'styled-components'

import {BreakpointSize} from '@/constants'

import {Subtitle} from '../Typography'

const ProjectCard = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    outline: 3px solid var(--color-primary);
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
  gap: 1rem;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    flex-direction: column;
  }
`
const ProjectCardLeft = styled.div`
  width: 22%;

  @media (max-width: ${BreakpointSize.TABLET.MAX}px) {
    width: 32%;
  }

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 40%;
  }

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    width: 100%;
  }
`
const ProjectCardRight = styled.div`
  width: 76%;

  @media (max-width: ${BreakpointSize.TABLET.MAX}px) {
    width: 68%;
  }

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 60%;
  }

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    width: 100%;
  }
`
const ProjectCardItem = styled.div`
  margin-bottom: 0.5rem;
`
const ProjectCardLabel = styled(Subtitle)``
const ProjectCardText = styled.div`
  overflow-wrap: break-word;
`
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
