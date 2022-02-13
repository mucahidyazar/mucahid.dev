import {createSelector} from 'reselect'

import {State} from '@/types'

const selectBlockchain = (state: State) => state.blockchain

export const makeSelectBlockchain = createSelector(
  selectBlockchain,
  ({blockchain}) => blockchain,
)

export const makeSelectBlockchainStatus = createSelector(
  makeSelectBlockchain,
  ({status}) => status,
)

export const makeSelectBlockchainAccount = createSelector(
  makeSelectBlockchain,
  ({account}) => account,
)

export const makeSelectBlockchainContract = createSelector(
  makeSelectBlockchain,
  ({contract}) => contract,
)

export const makeSelectBlockchainWeb3 = createSelector(
  makeSelectBlockchain,
  ({web3}) => web3,
)

export const makeSelectBlockchainError = createSelector(
  makeSelectBlockchain,
  ({error}) => error,
)

export const makeSelectBlockchainMessages = createSelector(
  selectBlockchain,
  ({messages}) => messages,
)

export const makeSelectBlockchainMessagesStatus = createSelector(
  makeSelectBlockchainMessages,
  ({status}) => status,
)

export const makeSelectBlockchainBoardMessages = createSelector(
  makeSelectBlockchainMessages,
  ({boardMessages}) => boardMessages,
)

export const makeSelectBlockchainMessageMessages = createSelector(
  makeSelectBlockchainMessages,
  ({messages}) => messages,
)

export const makeSelectBlockchainMessagesError = createSelector(
  makeSelectBlockchainMessages,
  ({error}) => error,
)
