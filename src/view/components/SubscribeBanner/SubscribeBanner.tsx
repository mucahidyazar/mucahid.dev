import React, {useRef} from 'react'
import Image from 'next/image'
import {useDispatch, useSelector} from 'react-redux'

import {makeSelectUser, setNewsletter} from '@/store/auth'
import {dataTestTarget} from '@/utilities'

import * as S from './style'

const SubscribeBanner = () => {
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
        <S.SubscribeBannerTopTitle level={6}>
          BOOST YOUR FRONTEND CAREER
        </S.SubscribeBannerTopTitle>
        <S.SubscribeBannerBottomTitle level={6}>
          THE FRONTEND DEVELOPER
        </S.SubscribeBannerBottomTitle>
      </S.SubscribeBannerLeft>

      <S.SubscribeBannerForm onSubmit={submitHandler} ref={newsletterForm}>
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
