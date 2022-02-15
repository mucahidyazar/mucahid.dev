import React from 'react'
import PropTypes from 'prop-types'

import * as S from './style'

interface ITitle {
  children: React.ReactNode
  id?: string
  level: number | string
}

const Title = ({children, level, ...titleProps}: ITitle) => {
  const Titles = S as {[key: string]: React.FunctionComponent}
  const TitleItem = Titles[`Title${level}`]

  return (
    <TitleItem data-testid="title" {...titleProps}>
      {children}
    </TitleItem>
  )
}

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
}

Title.defaultProps = {
  level: 1,
  children: null,
}

Title.S = S

export default Title
