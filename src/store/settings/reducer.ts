import * as types from './types'
import produce from 'immer'
import {Status} from '@/constants/index'

const INITIAL_STATE = {
  isLoadingVisible: false,
  activeRoute: '/',
}

export const reducer = produce((draft, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_ROUTE:
      draft.activeRoute = action.route
      break
    default:
      break
  }
}, INITIAL_STATE)
