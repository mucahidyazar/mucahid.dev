import React from 'react'
import Image from 'next/image'
import {useDispatch, useSelector} from 'react-redux'

import {makeSelectUser, setNewsletter} from '@/store/auth'

import * as S from './style'

const SubscribeBanner = () => {
  const dispatch = useDispatch()
  const user = useSelector(makeSelectUser)

  // event type
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget as any)
    const data = {
      email: form.get('email'),
      name: form.get('name'),
    }

    dispatch(setNewsletter(data as any))
  }

  return (
    <S.SubscribeBannerContainer>
      <S.SubscribeBannerLeft>
        <S.SubscribeBannerTopTitle level={6}>
          BOOST YOUR FRONTEND CAREER
        </S.SubscribeBannerTopTitle>
        <S.SubscribeBannerBottomTitle level={6}>
          THE FRONTEND DEVELOPER
        </S.SubscribeBannerBottomTitle>
      </S.SubscribeBannerLeft>

      <S.SubscribeBannerForm onSubmit={submitHandler}>
        {!user?.name && (
          <S.SubscribeBannerInput name="name" placeholder="Name" />
        )}
        {!user?.email && (
          <S.SubscribeBannerInput name="email" placeholder="Email" />
        )}
        {!user?.newsletter && (
          <S.SubscribeBannerButton>
            <S.SubscribeBannerButtonText>Subscribe</S.SubscribeBannerButtonText>
            <Image
              src="/svgs/mail-icon.svg"
              alt="mail-icon"
              width={24}
              height={24}
            />
          </S.SubscribeBannerButton>
        )}
      </S.SubscribeBannerForm>
    </S.SubscribeBannerContainer>
  )
}

SubscribeBanner.propTypes = {}

SubscribeBanner.defaultProps = {}

export default SubscribeBanner
