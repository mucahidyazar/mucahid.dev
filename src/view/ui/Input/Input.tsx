import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'

interface IInput {
  type?: string
  placeholder?: string
  name?: string
}

const Input = (props: IInput) => {
  return <S.Input data-testid="input" {...props} />
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  name: '',
}

Input.S = S

export default Input
