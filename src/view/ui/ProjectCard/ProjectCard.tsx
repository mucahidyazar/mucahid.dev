import React from 'react'
import Image from 'next/image'
import {Tag} from '@/ui/index'
import PropTypes from 'prop-types'

import * as S from './style'

const ProjectCard = ({imageUrl, title, subtitle, date}) => {
  return (
    <S.ProjectCard>
      <S.ProjectCardImage>
        <Image
          src="/images/introduction-image-1.jpg"
          width={1440}
          height={440}
          alt=""
        />
      </S.ProjectCardImage>
      <S.ProjectCardContent>
        <S.ProjectCardLeft>
          <S.ProjectCardItem>
            <S.ProjectCardLabel>Project Name</S.ProjectCardLabel>
            <S.ProjectCardText>Getir</S.ProjectCardText>
          </S.ProjectCardItem>
          <S.ProjectCardItem>
            <S.ProjectCardLabel>Technologies</S.ProjectCardLabel>
            <S.ProjectCardTags>
              <Tag>React</Tag>
              <Tag>NextJS</Tag>
              <Tag>TypeScript</Tag>
            </S.ProjectCardTags>
          </S.ProjectCardItem>
          <S.ProjectCardItem>
            <S.ProjectCardLabel>URL</S.ProjectCardLabel>
            <S.ProjectCardText>www.getir.com</S.ProjectCardText>
          </S.ProjectCardItem>
        </S.ProjectCardLeft>

        <S.ProjectCardRight>
          <S.ProjectCardItem>
            <S.ProjectCardLabel>Description</S.ProjectCardLabel>
            <S.ProjectCardText>
              How are you doin you having fun and like my website. I wanted to
              welcome you. How are you doing? Hopving fuaving fun and like my
              website. I wanted to welcome you. How are you doing? u having fun
              and like my website. I wanted to welcome you.How are you doin you
              having fun and like my website. I wanted to welcome you. How are
              you doing? Hopving fuaving fun and like my website. I wanted to
              welcome you. How are you doing? u having fun and like my website.
              I wanted to welcome you.How are you doin you having fun and like
              my website.
            </S.ProjectCardText>
          </S.ProjectCardItem>
        </S.ProjectCardRight>
      </S.ProjectCardContent>
    </S.ProjectCard>
  )
}

ProjectCard.propTypes = {}

ProjectCard.defaultProps = {}

ProjectCard.S = S

export default ProjectCard
