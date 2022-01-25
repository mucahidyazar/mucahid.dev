import React from 'react'

import {SectionHeader} from '@/components/index'

import * as S from './style'
import {SectionCard} from '../SectionCard'
import {useSelector} from 'react-redux'
import {makeSelectStarreds} from '@/store/articles/selectors'

interface ISectionTwo {}

const SectionTwo: React.FC<ISectionTwo> = () => {
  const starreds = useSelector(makeSelectStarreds)

  return (
    <S.SectionWrapper>
      <SectionHeader
        title="Favorite repositories"
        subtitle="Some of my favorite repositories on github."
        link="https://www.github.com/mucahidyazar"
      />
      <S.SectionCards>
        {starreds.map(contribution => (
          <SectionCard
            key={contribution.id}
            title={contribution.name}
            description={contribution.description}
            url={contribution.html_url}
          />
        ))}
      </S.SectionCards>
    </S.SectionWrapper>
  )
}

SectionTwo.propTypes = {}

SectionTwo.defaultProps = {}

export default SectionTwo
