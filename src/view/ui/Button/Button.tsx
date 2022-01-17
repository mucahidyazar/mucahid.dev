import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import * as S from './style'

const Button = ({children, imagePath, text, ...titleProps}) => {
  return (
    <S.Button data-testid="button" {...titleProps}>
      {children}
    </S.Button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

Button.defaultProps = {
  children: null,
}

Button.S = S

export default Button
