import React, {useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useTranslation} from 'next-i18next'

import {makeSelectUser, setNewsletter} from '@/store/auth'
import {dataTestTarget} from '@/utilities'
import {Icon} from '@/ui'

import * as S from './style'

const SubscribeBanner = () => {
  const {t} = useTranslation('common')
  const dispatch = useDispatch()
  const user = useSelector(makeSelectUser)
  const newsletterForm = useRef({} as HTMLFormElement)

  // event type
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name'))
    const email = String(form.get('email'))

    if (name && email) {
      dispatch(setNewsletter({email, name}))
    }

    newsletterForm?.current?.reset()
  }

  return (
    <S.SubscribeBannerContainer {...dataTestTarget('subscribe-banner')}>
      <S.SubscribeBannerLeft>
        <S.SubscribeBannerTopTitle>
          {t('newsletterSlogan')}
        </S.SubscribeBannerTopTitle>
        <S.SubscribeBannerBottomTitle>
          {t('newsletterHeading')}
        </S.SubscribeBannerBottomTitle>
      </S.SubscribeBannerLeft>

      <S.SubscribeBannerForm onSubmit={submitHandler} ref={newsletterForm}>
        {!user?.name && (
          <S.SubscribeBannerInput name="name" placeholder={t('name')} />
        )}
        {!user?.email && (
          <S.SubscribeBannerInput name="email" placeholder={t('email')} />
        )}
        {!user?.newsletter && (
          <S.SubscribeBannerButton>
            <S.SubscribeBannerButtonText>
              {t('subscribe')}
            </S.SubscribeBannerButtonText>
            <Icon name="send" size={20} />
          </S.SubscribeBannerButton>
        )}
      </S.SubscribeBannerForm>
    </S.SubscribeBannerContainer>
  )
}

SubscribeBanner.propTypes = {}

SubscribeBanner.defaultProps = {}

export default SubscribeBanner
