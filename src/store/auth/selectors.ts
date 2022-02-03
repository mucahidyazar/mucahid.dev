import {createSelector} from 'reselect'

const selectAuth = (state: any) => state.auth

export const makeSelectUser = createSelector(selectAuth, ({user}) => user)

export const makeSelectExpires = createSelector(
  selectAuth,
  ({expires}) => expires,
)
