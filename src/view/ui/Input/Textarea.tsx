import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'

const Textarea = ({children, level, ...titleProps}) => {
  return <S.Textarea data-testid="textarea" {...titleProps} />
}

Textarea.propTypes = {}

Textarea.defaultProps = {}

Textarea.S = S

export default Textarea
