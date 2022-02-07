import {createSelector} from 'reselect'

import {State} from '@/types'

const selectSettings = (state: State) => state.settings

export const makeSelectIsLoadingVisible = createSelector(
  selectSettings,
  ({isLoadingVisible}) => isLoadingVisible,
)

export const makeSelectActiveRoute = createSelector(
  selectSettings,
  ({activeRoute}) => activeRoute,
)
