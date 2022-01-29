import React from 'react'
import PropTypes from 'prop-types'

import {IconSize} from '@/constants'

import {icons} from './icons'
import * as S from './style'

function Icon({name, format, spinning, ...props}) {
  const iconProps = {name, spinning, ...props}
  const wrapperProps = {...props, format}

  return (
    <S.Wrapper {...wrapperProps}>
      <S.Icon data-testid="icon" {...iconProps}>
        <S.Path d={icons[name]} />
      </S.Icon>
    </S.Wrapper>
  )
}

Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  spinning: PropTypes.bool,
  version: PropTypes.string,
  xmlns: PropTypes.string,
  viewBox: PropTypes.string,
  format: PropTypes.oneOf(Object.values(IconSize)),
}

Icon.defaultProps = {
  size: 18,
  color: 'currentColor',
  spinning: false,
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  format: IconSize.LARGE,
}

Icon.S = S

export default Icon
