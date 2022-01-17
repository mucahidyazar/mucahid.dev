import React from 'react'
import Link from 'next/link'
import type {NextComponentType} from 'next'
import {Title, Subtitle} from '@/ui/index'
import * as S from './style'

const SectionHeader: NextComponentType = ({title, subtitle, link, ...rest}) => {
  return (
    <S.SectionHeader {...rest}>
      <S.SectionHeaderTop>
        <Title level={5}>{title}</Title>
        {link && <Link href="">See All</Link>}
      </S.SectionHeaderTop>
      <Subtitle>{subtitle}</Subtitle>
    </S.SectionHeader>
  )
}

export default SectionHeader
