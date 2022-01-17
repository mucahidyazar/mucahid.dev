import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'

interface ITextarea {
  children: React.ReactNode
}

const Textarea = ({children, ...titleProps}: ITextarea) => {
  return <S.Textarea data-testid="textarea" {...titleProps} />
}

Textarea.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

Textarea.defaultProps = {
  children: null,
}

Textarea.S = S

export default Textarea
