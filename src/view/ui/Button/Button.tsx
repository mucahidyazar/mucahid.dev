import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'

interface IButton {
  children: React.ReactNode
}

const Button = ({children, ...titleProps}: IButton) => {
  return (
    <S.Button data-testid="button" {...titleProps}>
      {children}
    </S.Button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
}

Button.defaultProps = {}

Button.S = S

export default Button
