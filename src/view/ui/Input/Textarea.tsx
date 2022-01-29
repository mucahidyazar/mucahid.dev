import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'

interface ITextarea {}

const Textarea: React.FC<ITextarea> = props => {
  return <S.Textarea data-testid="textarea" {...props} />
}

Textarea.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

Textarea.defaultProps = {
  children: null,
}

Textarea.S = S

export default Textarea
