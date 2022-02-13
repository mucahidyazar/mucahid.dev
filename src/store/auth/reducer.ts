import produce from 'immer'

import {AuthState} from '@/types'

import * as types from './types'

const INITIAL_STATE: AuthState = {
  user: {
    id: '',
    name: '',
    email: '',
    emailVerified: false,
    image: '',
    newsletter: false,
    metamask: [],
    role: 1,
  },
  expires: '',
}

export const reducer = produce((draft, action) => {
  switch (action.type) {
    case types.SAVE_AUTH:
      draft.user = action.data?.user
      draft.expires = action.data?.expires
      break
    case types.SET_NEWSLETTER_SUCCESS:
      draft.user.newsletter = true
      break
    case types.GET_USER_METAMASKS_SUCCESS:
      draft.user.metamask = action.data
      break
    default:
      break
  }
}, INITIAL_STATE)
