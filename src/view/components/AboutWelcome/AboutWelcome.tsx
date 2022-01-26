import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import type {NextComponentType} from 'next'
import * as S from './style'
import {Button} from '@/ui/index'
import {useRouter} from 'next/router'

const AboutWelcome: NextComponentType = () => {
  const router = useRouter()

  return (
    <S.AboutWelcomeContainer>
      <S.AboutWelcomeProfile>
        <S.AboutWelcomeImage>
          <Image
            src="/images/introduction-image-1.jpg"
            layout="fill"
            objectFit="cover"
            alt="Profile Photo"
          />
        </S.AboutWelcomeImage>
        <S.AboutWelcomeSocials>
          <Image
            src="/svgs/codepen-icon.svg"
            width={20}
            height={20}
            alt="Codepen"
          />
          <Image
            src="/svgs/instagram-icon.svg"
            width={20}
            height={20}
            alt="Instagram"
          />
          <Image src="/svgs/mail-icon.svg" width={20} height={20} alt="mail" />
          <Image
            src="/svgs/linkedin-icon.svg"
            width={20}
            height={20}
            alt="linkedin"
          />
        </S.AboutWelcomeSocials>
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
          <Button
            onClick={() => {
              window.open('/resume.pdf', '_blank')
            }}
          >
            Download Resume
          </Button>
          <Button outline onClick={() => router.push('/contact')}>
            Hire Me
          </Button>
        </S.AboutWelcomeButtons>
      </S.AboutWelcomeContent>
    </S.AboutWelcomeContainer>
  )
}

AboutWelcome.propTypes = {}

AboutWelcome.defaultProps = {}

export default AboutWelcome
