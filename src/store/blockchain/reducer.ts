import produce from 'immer'

import {Status} from '@/constants'

import * as types from './types'

const INITIAL_STATE = {
  blockchain: {
    status: Status.INIT,
    account: null,
    contract: null,
    web3: null,
    error: '',
  },
  messages: {
    status: Status.INIT,
    messages: [],
    boardMessages: [],
    error: null,
  },
}

export const reducer = produce((draft, action) => {
  switch (action.type) {
    case types.GET_ALL_MESSAGES_REQUEST:
      draft.messages.status = Status.LOADING
      break
    case types.GET_ALL_MESSAGES_SUCCESS:
      draft.messages.status = Status.OK
      draft.messages.messages = action.messages
      draft.messages.boardMessages = action.boardMessages
      break
    case types.GET_ALL_MESSAGES_FAILED:
      draft.messages.status = Status.ERROR
      draft.messages.error = action.error
      break
    case types.CONNECTION_REQUEST:
      draft.blockchain.status = Status.LOADING
      break
    case types.CONNECTION_SUCCESS:
      draft.blockchain.status = Status.OK
      draft.blockchain.account = action.account
      draft.blockchain.contract = action.contract
      draft.blockchain.web3 = action.web3
      break
    case types.CONNECTION_FAILED:
      draft.blockchain.status = Status.ERROR
      draft.blockchain.error = action.error
      break
    case types.UPDATE_ACCOUNT:
      draft.blockchain.account = action.account
      break
    default:
      break
  }
}, INITIAL_STATE)
