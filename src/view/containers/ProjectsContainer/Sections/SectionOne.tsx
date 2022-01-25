import React from 'react'

import {contributions} from '@/data'
import {SectionHeader} from '@/components/index'

import * as S from './style'
import {} from '../SectionCard/style'
import {SectionCard} from '../SectionCard'

interface ISectionOne {}

const SectionOne: React.FC<ISectionOne> = () => {
  return (
    <S.SectionWrapper>
      <SectionHeader
        title="Contributions, Open-sources"
        subtitle="These are my projects that I have contributed and created."
        link="https://www.github.com/mucahidyazar"
      />
      <S.SectionCards>
        {contributions.map(contribution => (
          <SectionCard key={contribution.id} {...contribution} />
        ))}
      </S.SectionCards>
    </S.SectionWrapper>
  )
}

SectionOne.propTypes = {}

SectionOne.defaultProps = {}

export default SectionOne
