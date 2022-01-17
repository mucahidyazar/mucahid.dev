import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import * as S from './style'

const Badge = ({children, imagePath, text, ...titleProps}) => {
  return (
    <S.Badge data-testid="badge" {...titleProps}>
      {imagePath && <Image src={imagePath} width={40} height={40} alt="text" />}
      {children || text}
    </S.Badge>
  )
}

Badge.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

Badge.defaultProps = {
  children: null,
}

Badge.S = S

export default Badge
