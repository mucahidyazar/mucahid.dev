import React from 'react'
import type {NextComponentType} from 'next'
import {Introduction, Sections} from '@/components/index'
import {SectionOne, SectionTwo} from './Sections'

const HomeContainer: NextComponentType = () => {
  return (
    <>
      <Introduction rightContent />
      <Sections SectionOne={SectionOne} SectionTwo={SectionTwo} />
    </>
  )
}

export default HomeContainer
