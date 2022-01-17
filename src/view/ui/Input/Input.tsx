import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'

interface IInput {
  children: React.ReactNode
}

const Input = ({children, ...titleProps}: IInput) => {
  return <S.Input data-testid="input" {...titleProps} />
}

Input.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

Input.defaultProps = {
  children: null,
}

Input.S = S

export default Input
