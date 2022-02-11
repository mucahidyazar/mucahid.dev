import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'

interface ISections {
  sectionOne: React.ReactNode
  sectionTwo: React.ReactNode
}

const Sections: React.FC<ISections> = ({sectionOne, sectionTwo}) => {
  return (
    <S.Sections>
      {sectionOne}
      {sectionTwo}
    </S.Sections>
  )
}

Sections.propTypes = {
  sectionOne: PropTypes.node.isRequired,
  sectionTwo: PropTypes.node.isRequired,
}

Sections.defaultProps = {}

export default Sections
