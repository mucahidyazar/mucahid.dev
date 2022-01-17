import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'

interface ITag {
  children?: React.ReactNode
  text?: string
}

const Tag = ({children, text, ...titleProps}: ITag) => {
  return (
    <S.Tag data-testid="tag" {...titleProps}>
      {children || text}
    </S.Tag>
  )
}

Tag.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  text: PropTypes.string,
}

Tag.defaultProps = {
  children: null,
  text: null,
}

Tag.S = S

export default Tag
