import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'

const Tag = ({children, text, ...titleProps}) => {
  return (
    <S.Tag data-testid="tag" {...titleProps}>
      {children || text}
    </S.Tag>
  )
}

Tag.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

Tag.defaultProps = {
  children: null,
}

Tag.S = S

export default Tag
