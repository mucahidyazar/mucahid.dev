import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'

interface IInput {
  id?: string
  type?: string
  placeholder?: string
  name?: string
  min?: number | string
}

const Input = (props: IInput) => {
  return <S.Input data-testid="input" {...props} />
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Input.defaultProps = {
  id: '',
  type: 'text',
  placeholder: '',
  name: '',
  min: 0,
}

Input.S = S

export default Input
