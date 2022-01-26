import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'

interface IButton {
  children: React.ReactNode
  outline?: boolean
  primary?: boolean
  onClick?: () => void
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
  outline: PropTypes.bool,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  outline: false,
  primary: false,
  onClick: () => {},
}

Button.S = S

export default Button
