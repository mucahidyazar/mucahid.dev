import {createSelector} from 'reselect'

import {State} from '@/types'

const selectGeneral = (state: State) => state.general

export const makeSelectActiveUsers = createSelector(
  selectGeneral,
  ({activeUsers}) => activeUsers,
)
