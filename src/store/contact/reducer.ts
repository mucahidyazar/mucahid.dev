import produce from 'immer'

import {Status} from '@/constants'
import {ContactState} from '@/types'

import * as types from './types'

const INITIAL_STATE: ContactState = {
  messages: {
    status: Status.INIT,
    data: [],
    error: null,
  },
  board: {
    status: Status.INIT,
    data: [],
    error: null,
  },
  email: {
    status: Status.INIT,
    data: [],
    error: null,
  },
  stats: {
    status: Status.INIT,
    totalMessages: 0,
    totalGiveaways: 0,
    totalCoffee: 0,
    error: null,
  },
}

export const reducer = produce((draft, action) => {
  switch (action.type) {
    case types.SEND_EMAIL_REQUEST:
      draft.email.status = Status.LOADING
      break
    case types.SEND_EMAIL_SUCCESS:
      draft.email.status = Status.OK
      break
    case types.SEND_EMAIL_FAILED:
      draft.email.status = Status.ERROR
      draft.email.error = action.error
      break

    case types.GET_STATS_REQUEST:
      draft.stats.status = Status.LOADING
      break
    case types.GET_STATS_SUCCESS:
      draft.stats.status = Status.OK
      draft.stats.totalMessages = action.data.totalMessages
      draft.stats.totalGiveaways = action.data.totalGiveaways
      draft.stats.totalCoffee = action.data.totalCoffee
      break
    case types.GET_STATS_FAILED:
      draft.stats.status = Status.ERROR
      draft.stats.error = action.error
      break
    default:
      break
  }
}, INITIAL_STATE)
