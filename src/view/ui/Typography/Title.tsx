import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'

const Title = ({children, level, ...titleProps}) => {
  const TitleItem = S[`Title${level}`]

  return (
    <TitleItem data-testid="title" {...titleProps}>
      {children}
    </TitleItem>
  )
}

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
}

Title.defaultProps = {
  level: 1,
  children: null,
}

Title.S = S

export default Title
