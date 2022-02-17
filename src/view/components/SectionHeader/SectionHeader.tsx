import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import {Title, Subtitle} from '@/ui'

import * as S from './style'

interface ISectionHeader {
  title: string
  subtitle?: string
  link?: string
}

const SectionHeader: React.FC<ISectionHeader> = ({
  title,
  subtitle,
  link,
  ...rest
}) => {
  return (
    <S.SectionHeader {...rest}>
      <S.SectionHeaderTop>
        <Title level={5}>{title}</Title>
        {link && <Link href={link}>See All</Link>}
      </S.SectionHeaderTop>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </S.SectionHeader>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  link: PropTypes.string,
}

SectionHeader.defaultProps = {
  subtitle: '',
  link: '',
}

export default SectionHeader
