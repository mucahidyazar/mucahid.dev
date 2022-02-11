import {createSelector} from 'reselect'

import {State} from '@/types'

const selectAuth = (state: State) => state.auth

export const makeSelectUser = createSelector(selectAuth, ({user}) => user)

export const makeSelectExpires = createSelector(
  selectAuth,
  ({expires}) => expires,
)
