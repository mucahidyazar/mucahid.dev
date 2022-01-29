import produce from 'immer'

import {Status} from '@/constants'

import * as types from './types'

const INITIAL_STATE = {
  apis: {
    status: null,
    data: [],
    count: null,
    error: null,
  },
  starreds: {
    status: null,
    data: [],
    error: null,
  },
}

export const reducer = produce((draft, action) => {
  switch (action.type) {
    case types.GET_APIS_REQUEST:
      draft.apis.status = Status.LOADING
      break
    case types.GET_APIS_SUCCESS:
      draft.apis.status = Status.OK
      draft.apis.data = action.data
      draft.apis.count = action.count
      break
    case types.GET_APIS_FAILED:
      draft.apis.status = Status.ERROR
      draft.apis.error = action.error
      break
    case types.GET_STARREDS_REQUEST:
      draft.starreds.status = Status.LOADING
      break
    case types.GET_STARREDS_SUCCESS:
      draft.starreds.status = Status.OK
      draft.starreds.data = action.data
      break
    case types.GET_STARREDS_FAILED:
      draft.starreds.status = Status.ERROR
      draft.starreds.error = action.error
      break
    default:
      break
  }
}, INITIAL_STATE)
