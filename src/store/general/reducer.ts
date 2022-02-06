import produce from 'immer'

import {GeneralState} from '@/types'

import * as types from './types'

const INITIAL_STATE: GeneralState = {
  activeUsers: [],
}

export const reducer = produce((draft, action) => {
  switch (action.type) {
    case types.ADD_ACTIVE_USER:
      draft.activeUsers = action.activeUsers
      break
    case types.REMOVE_ACTIVE_USER:
      draft.activeUsers = action.activeUsers
      break
    default:
      break
  }
}, INITIAL_STATE)
