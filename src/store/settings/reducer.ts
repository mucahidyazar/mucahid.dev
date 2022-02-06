import produce from 'immer'

// import {Status} from '@/constants'

import * as types from './types'

const INITIAL_STATE = {
  isLoadingVisible: false,
  activeRoute: '/',
  modalType: null,
  theme: 'dark',
}

export const reducer = produce((draft, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_ROUTE:
      draft.activeRoute = action.route
      break
    case types.SET_MODAL_TYPE:
      draft.modalType = action.modalType
      break
    case types.CHANGE_THEME:
      draft.theme = action.theme
      break
    default:
      break
  }
}, INITIAL_STATE)
