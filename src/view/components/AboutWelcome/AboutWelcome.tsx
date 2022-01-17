import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import type {NextComponentType} from 'next'
import * as S from './style'
import {Button} from '@/ui/index'

const AboutWelcome: NextComponentType = () => {
  return (
    <S.AboutWelcomeContainer>
      <S.AboutWelcomeProfile>
        <S.AboutWelcomeImage>
          <Image
            src="/images/introduction-image-1.jpg"
            width={440}
            height={440}
            alt=""
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
          How are you doing? Hope you having fun and like my website. I wanted
          to AboutWelcome you. How are you doing? Hope you having fun and like
          my website. I wanted to AboutWelcome you. How are you doing? Hope you
          having fun and like my website. I wanted to AboutWelcome you. How are
          you doing? Hope you having fun and like my website. I wanted to
          AboutWelcome you.
        </S.AboutWelcomeContentDescription>
        <S.AboutWelcomeButtons>
          <Button>Download Resume</Button>
          <Button outline>Hire Me</Button>
        </S.AboutWelcomeButtons>
      </S.AboutWelcomeContent>
    </S.AboutWelcomeContainer>
  )
}

AboutWelcome.propTypes = {}

AboutWelcome.defaultProps = {}

export default AboutWelcome
