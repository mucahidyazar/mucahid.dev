import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'

const Input = ({children, ...titleProps}) => {
  return <S.Input data-testid="input" {...titleProps} />
}

Input.propTypes = {}

Input.defaultProps = {}

Input.S = S

export default Input
