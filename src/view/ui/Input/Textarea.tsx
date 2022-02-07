import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'

interface ITextarea {
  placeholder?: string
  name?: string
}

const Textarea = (props: ITextarea) => {
  return <S.Textarea data-testid="textarea" {...props} />
}

Textarea.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
}

Textarea.defaultProps = {
  placeholder: '',
  name: '',
}

Textarea.S = S

export default Textarea
