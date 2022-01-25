import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'

interface ISections {
  SectionOne: React.FC
  SectionTwo: React.FC
}

const Sections: React.FC<ISections> = ({SectionOne, SectionTwo}) => {
  return (
    <S.Sections>
      <S.SectionOne>
        <SectionOne />
      </S.SectionOne>
      <S.SectionTwo>
        <SectionTwo />
      </S.SectionTwo>
    </S.Sections>
  )
}

Sections.propTypes = {}

Sections.defaultProps = {}

export default Sections
