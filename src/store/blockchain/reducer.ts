import produce from 'immer'

// import {Status} from '@/constants'

// import * as types from './types'

const INITIAL_STATE = {
  loading: false,
  account: null,
  lipToken: null,
  web3: null,
  error: '',
}

export const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'CONNECTION_REQUEST':
      draft.loading = true
      break
    case 'CONNECTION_SUCCESS':
      draft.loading = false
      draft.account = action.payload.account
      draft.lipToken = action.payload.lipToken
      draft.web3 = action.payload.web3
      break
    case 'CONNECTION_FAILED':
      draft.loading = false
      draft.error = action.payload
      break
    case 'UPDATE_ACCOUNT':
      draft.account = action.payload.account
      break
    default:
      break
  }
}, INITIAL_STATE)
