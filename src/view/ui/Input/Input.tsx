import React from 'react'

import * as S from './style'

interface IInput {}

const Input: React.FC<IInput> = props => {
  return <S.Input data-testid="input" {...props} />
}

Input.propTypes = {}

Input.defaultProps = {}

Input.S = S

export default Input
