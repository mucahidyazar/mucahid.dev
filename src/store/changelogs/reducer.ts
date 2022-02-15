import produce from 'immer'

import {Status} from '@/constants'
import {ChangelogsState} from '@/types'

import * as types from './types'

const INITIAL_STATE: ChangelogsState = {
  changelogs: {
    status: Status.INIT,
    data: [],
    error: null,
  },
}

export const reducer = produce((draft, action) => {
  switch (action.type) {
    case types.GET_CHANGELOGS_REQUEST:
      draft.changelogs.status = Status.LOADING
      break
    case types.GET_CHANGELOGS_SUCCESS:
      draft.changelogs.status = Status.OK
      draft.changelogs.data = action.data
      break
    case types.GET_CHANGELOGS_FAILED:
      draft.changelogs.status = Status.ERROR
      draft.changelogs.error = action.error
      break
    default:
      break
  }
}, INITIAL_STATE)
