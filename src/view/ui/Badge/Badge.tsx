import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import * as S from './style'

interface IBadge {
  children?: React.ReactNode
  imagePath?: string
  text?: string
}

const Badge = ({children, imagePath, text, ...titleProps}: IBadge) => {
  return (
    <S.Badge data-testid="badge" {...titleProps}>
      {imagePath && <Image src={imagePath} width={40} height={40} alt="text" />}
      {children || text}
    </S.Badge>
  )
}

Badge.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  imagePath: PropTypes.string,
  text: PropTypes.string,
}

Badge.defaultProps = {
  children: null,
  imagePath: null,
  text: null,
}

Badge.S = S

export default Badge
