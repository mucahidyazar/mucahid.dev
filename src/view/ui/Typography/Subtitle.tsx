import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'

const Subtitle = ({children, ...titleProps}) => {
  return (
    <S.Subtitle data-testid="subtitle" {...titleProps}>
      {children}
    </S.Subtitle>
  )
}

Subtitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

Subtitle.defaultProps = {
  children: null,
}

Subtitle.S = S

export default Subtitle
