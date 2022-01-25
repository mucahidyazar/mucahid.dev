import React from 'react'
import Image from 'next/image'
import {Tag} from '@/ui/index'
import PropTypes from 'prop-types'

import * as S from './style'

interface IProjectCardProps {
  name: string
  url: string
  image: string
  technologies: string[]
  description: string
}

const ProjectCard: React.FC<IProjectCardProps> = ({
  name,
  url,
  image,
  technologies,
  description,
}) => {
  return (
    <S.ProjectCard>
      <S.ProjectCardImage>
        <Image
          src={image}
          layout="fill"
          alt="name"
          objectFit="cover"
          objectPosition="center top"
        />
      </S.ProjectCardImage>
      <S.ProjectCardContent>
        <S.ProjectCardLeft>
          <S.ProjectCardItem>
            <S.ProjectCardLabel>Project Name</S.ProjectCardLabel>
            <S.ProjectCardText>{name}</S.ProjectCardText>
          </S.ProjectCardItem>
          <S.ProjectCardItem>
            <S.ProjectCardLabel>Technologies</S.ProjectCardLabel>
            <S.ProjectCardTags>
              {technologies?.map(technology => (
                <Tag key={technology}>{technology}</Tag>
              ))}
            </S.ProjectCardTags>
          </S.ProjectCardItem>
          <S.ProjectCardItem>
            <S.ProjectCardLabel>URL</S.ProjectCardLabel>
            <S.ProjectCardText>{url}</S.ProjectCardText>
          </S.ProjectCardItem>
        </S.ProjectCardLeft>

        <S.ProjectCardRight>
          <S.ProjectCardItem>
            <S.ProjectCardLabel>Description</S.ProjectCardLabel>
            <S.ProjectCardText>{description}</S.ProjectCardText>
          </S.ProjectCardItem>
        </S.ProjectCardRight>
      </S.ProjectCardContent>
    </S.ProjectCard>
  )
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string.isRequired,
}

ProjectCard.defaultProps = {
  technologies: [],
}

export default ProjectCard
