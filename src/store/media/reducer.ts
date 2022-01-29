import produce from 'immer'

import {Status} from '@/constants'

import * as types from './types'

const INITIAL_STATE = {
  instagram: {
    status: null,
    data: [],
    error: null,
  },
}

export const reducer = produce((draft, action) => {
  switch (action.type) {
    case types.GET_INSTAGRAM_REQUEST:
      draft.instagram.status = Status.LOADING
      break
    case types.GET_INSTAGRAM_SUCCESS:
      draft.instagram.status = Status.OK
      draft.instagram.data = action.data
      break
    case types.GET_INSTAGRAM_FAILED:
      draft.instagram.status = Status.ERROR
      draft.instagram.error = action.error
      break
    default:
      break
  }
}, INITIAL_STATE)
