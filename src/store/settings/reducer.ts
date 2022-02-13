import produce from 'immer'

import {SettingsState} from '@/types'

// import {Status} from '@/constants'

import * as types from './types'

const INITIAL_STATE: SettingsState = {
  isLoadingVisible: false,
  activeRoute: '/',
  modalType: null,
  theme: 'default',
  language: 'en',
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
    case types.CHANGE_LANGUAGE:
      draft.language = action.language
      break
    default:
      break
  }
}, INITIAL_STATE)
