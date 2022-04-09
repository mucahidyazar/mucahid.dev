import React from 'react'
import Image from 'next/image'
import {useTranslation} from 'next-i18next'

import {Button} from '@/ui'

import * as S from './style'

const AboutWelcome: React.FC = () => {
  const {t} = useTranslation()

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
          {t('aboutMeTitle')}
        </S.AboutWelcomeContentTitle>
        <S.AboutWelcomeContentDescription>
          {t('aboutMeLong')}
        </S.AboutWelcomeContentDescription>
        <S.AboutWelcomeButtons>
          <S.AboutWelcomeLink href="/resume.pdf" target="_blank">
            <Button>{t('downloadResume')}</Button>
          </S.AboutWelcomeLink>
          <S.AboutWelcomeLink href="mailto: mucahidyazar@gmail.com">
            <Button outline>{t('hireMe')}</Button>
          </S.AboutWelcomeLink>
        </S.AboutWelcomeButtons>
      </S.AboutWelcomeContent>
    </S.AboutWelcomeContainer>
  )
}

AboutWelcome.propTypes = {}

AboutWelcome.defaultProps = {}

export default AboutWelcome
