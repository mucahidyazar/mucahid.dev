import React from 'react'
import PropTypes from 'prop-types'

import {IconSize} from '@/constants'

import {icons} from './icons'
import * as S from './style'

interface IIcon {
  name: string
  size?: number
  color?: string
  spinning?: boolean
  version?: string
  xmlns?: string
  viewBox?: string
  format?: any
  childRef?: React.Ref<any>
}

function Icon({name, format, spinning, childRef, ...props}: IIcon) {
  return (
    <S.Wrapper format={format} ref={childRef} {...props}>
      <S.Icon data-testid="icon" name={name} spinning={spinning} {...props}>
        <S.Path d={icons[name]} />
      </S.Icon>
    </S.Wrapper>
  )
}

const MainIcon = React.forwardRef<HTMLDivElement, IIcon>((props, ref) => (
  <Icon {...props} childRef={ref} />
))

MainIcon.displayName = 'MainIcon'

Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  spinning: PropTypes.bool,
  version: PropTypes.string,
  xmlns: PropTypes.string,
  viewBox: PropTypes.string,
  format: PropTypes.oneOf([...Object.values(IconSize), 'none']),
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

export default MainIcon
