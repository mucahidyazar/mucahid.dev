import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

import * as S from './style'

interface ISectionCard {
  title: string
  description: string
  url: string
}

const SectionCard: React.FC<ISectionCard> = ({title, description, url}) => {
  return (
    <S.SectionCard href={url} target="_blank">
      <S.SectionCardImage>
        <Image
          src="/images/github-icon.png"
          alt="Project Source Image"
          layout="fill"
        />
      </S.SectionCardImage>
      <S.SectionCardContent>
        <S.SectionCardTitle level={6}>{title}</S.SectionCardTitle>
        <S.SectionCardSubtitle>{description}</S.SectionCardSubtitle>
      </S.SectionCardContent>
    </S.SectionCard>
  )
}

SectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

SectionCard.defaultProps = {}

SectionCard.S = S

export default SectionCard
