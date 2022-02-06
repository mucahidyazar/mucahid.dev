import {createSelector} from 'reselect'

const selectGeneral = (state: any) => state.general

export const makeSelectActiveUsers = createSelector(
  selectGeneral,
  ({activeUsers}) => activeUsers,
)
