import React from 'react'
import PropTypes from 'prop-types'

import {SectionHeader} from '@/components'

import * as S from './style'

interface ISection {
  children: React.ReactNode
  title: string
  subtitle: string
  link?: string
}

const Section: React.FC<ISection> = ({children, title, subtitle, link}) => {
  return (
    <S.SectionWrapper>
      <SectionHeader title={title} subtitle={subtitle} link={link} />
      {children}
    </S.SectionWrapper>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string,
}

Section.defaultProps = {
  link: '',
}

export default Section
