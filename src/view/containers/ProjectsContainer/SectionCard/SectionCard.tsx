import React from 'react'
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
      <S.SectionCardIcon name="github" size={40} />
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

export default SectionCard
