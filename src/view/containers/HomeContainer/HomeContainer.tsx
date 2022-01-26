import React from 'react'
import type {NextComponentType} from 'next'
import {
  Introduction,
  SectionHeader,
  Welcome,
  SectionSlider,
  SubscribeBanner,
  Sections,
} from '@/components/index'
import {Window} from '@/layout/index'
import {Card, PostCard, Input, Textarea, Button, ProjectCard} from '@/ui/index'
import * as S from './style'
import {SectionOne, SectionTwo} from './Sections'

const HomeContainer: NextComponentType = () => {
  return (
    <>
      <Welcome
        illustration="message"
        title="Hi, passanger! Welcome!"
        description="I am Mucahid from Turkey. I'm a programmer and I specialize in front-end development. I live in Istanbul and I am 28 years old. I want to talk about some myself. I studied Work and Health Safety and graduated from Maltepe University. And I began coding 1.5 years ago when I was on the half of the second year on my university. I have been studying all day new technologies, libraries and frameworks almost for 1.5 year. I am aware of my age and the situation that I began coding too late. But I know those are not obstacles for me and therefore I have been trying to study harder more. In the circumstances I got my first job about 3 months ago. Now I work for GRANOBRA as Frontend Developer."
      />
      <Introduction rightContent />
      <Sections SectionOne={SectionOne} SectionTwo={SectionTwo} />

      <Introduction />
      {/* <S.SummarySection>
        <SectionHeader
          title="Contents"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
        />
        <SectionSlider data={[]} hasBadge hasArrow />
      </S.SummarySection> */}
    </>
  )
}

export default HomeContainer
