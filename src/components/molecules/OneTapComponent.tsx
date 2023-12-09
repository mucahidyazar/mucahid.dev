'use client'

import {useSession, signIn, SignInOptions} from 'next-auth/react'
import {useState} from 'react'

import {env} from '@/configs/env.mjs'

interface OneTapSigninOptions {
  parentContainerId?: string
}

const PARENT_CONTAINER_ID = 'oneTap'

export const OneTapComponent = () => {
  const {isLoading, status} = useOneTapSignin({
    redirect: false,
    parentContainerId: PARENT_CONTAINER_ID,
  })

  if (status === 'authenticated') {
    window.location.href = '/'
  }

  // This is done with tailwind. Update with system of choice
  return (
    <div
      id={PARENT_CONTAINER_ID}
      className="fixed right-2 top-12 z-20"
      data-is-loading={isLoading}
    />
  )
}

function useOneTapSignin(
  options?: OneTapSigninOptions &
    Pick<SignInOptions, 'redirect' | 'callbackUrl'>,
) {
  const {parentContainerId} = options || {}
  const [isLoading, setIsLoading] = useState(false)

  // Taking advantage in recent development of useSession hook.
  // If user is unauthenticated, google one tap ui is initialized and rendered
  const {status} = useSession({
    required: true,
    onUnauthenticated() {
      if (!isLoading) {
        const {google} = window as unknown as any

        if (google) {
          google.accounts.id.initialize({
            client_id: env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            // auto_select: true, // TODO: Uncomment this line if you want to skip the one tap UI
            callback: async (response: any) => {
              setIsLoading(true)

              // Here we call our Provider with the token provided by google
              await signIn('googleonetap', {
                credential: response.credential,
                redirect: true,
                ...options,
              })
              setIsLoading(false)
            },
            prompt_parent_id: parentContainerId,
          })

          // Here we just log some error situations and reason why the google one tap
          // is not displayed. You may want to handle it depending on yuor application
          google.accounts.id.prompt((notification: any) => {
            if (notification.isNotDisplayed()) {
              console.log(
                'getNotDisplayedReason ::',
                notification.getNotDisplayedReason(),
              )
            } else if (notification.isSkippedMoment()) {
              console.log(
                'getSkippedReason  ::',
                notification.getSkippedReason(),
              )
            } else if (notification.isDismissedMoment()) {
              console.log(
                'getDismissedReason ::',
                notification.getDismissedReason(),
              )
            }
          })
        }
      }
    },
  })

  return {status, isLoading}
}
