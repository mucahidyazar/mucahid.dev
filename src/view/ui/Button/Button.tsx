import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'

interface IButton {
  children: React.ReactNode
  outline?: boolean
  priamry?: boolean
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
  priamry: PropTypes.bool,
}

Button.defaultProps = {
  outline: false,
  priamry: false,
}

Button.S = S

export default Button
