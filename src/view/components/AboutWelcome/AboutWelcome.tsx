import React from 'react'
import Image from 'next/image'
import type {NextComponentType} from 'next'
import {useRouter} from 'next/router'

import {Button, Icon} from '@/ui'

import * as S from './style'

const AboutWelcome: NextComponentType = () => {
  const router = useRouter()

  return (
    <S.AboutWelcomeContainer>
      <S.AboutWelcomeProfile>
        <S.AboutWelcomeImage>
          <Image
            src="/images/profile.jpg"
            layout="fill"
            objectFit="cover"
            alt="Profile Photo"
          />
        </S.AboutWelcomeImage>
      </S.AboutWelcomeProfile>

      <S.AboutWelcomeContent>
        <S.AboutWelcomeContentTitle level={3}>
          Hi there!
        </S.AboutWelcomeContentTitle>
        <S.AboutWelcomeContentDescription>
          I am working for 3 years as a Frontend developer and I am trying to
          improve myself to be a good FullStack developer. I can design Restful
          API with NodeJS, GraphQL and Prisma, I am comfortable with Javascript.
          I can manage your project by myself and to create what you want.
          Currently, I am interesting in blockchain technologies and I want to
          improve myself in these areas. And I also love creating beautiful
          designs on Figma. And I am writing articles on Medium and my blog. I
          like to share and learn some new stuff in this way. I love and like
          HTML and CSS. As you know they really make beautiful and give pleasure
          for us and users. And I can design and built with my codes what you
          need. I can design Figma/XD/Zeplin to Html/Css/Js/React/Next. I can
          tell easily what I know so I can teach and share my experience with my
          teammates. And I am also a good RPG gamer. I think being a good RPG
          gamer is really important for developing. Because I think this means
          you know what you want. Because RPG gamers want more options and
          interactives in-game and they want this game not to be too complicated
          and bad design as the game is doing this. And I can build and design
          like this application. Doing this is very enjoyable for me. I am still
          trying to improve myself and learn some new technologies.
        </S.AboutWelcomeContentDescription>
        <S.AboutWelcomeButtons>
          <S.AboutWelcomeLink href="/resume.pdf" target="_blank">
            <Button>Download Resume</Button>
          </S.AboutWelcomeLink>
          <S.AboutWelcomeLink href="mailto: mucahidyazar@gmail.com">
            <Button outline>Hire Me</Button>
          </S.AboutWelcomeLink>
        </S.AboutWelcomeButtons>
      </S.AboutWelcomeContent>
    </S.AboutWelcomeContainer>
  )
}

AboutWelcome.propTypes = {}

AboutWelcome.defaultProps = {}

export default AboutWelcome
