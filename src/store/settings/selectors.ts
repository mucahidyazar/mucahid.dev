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

export const makeSelectModalType = createSelector(
  selectSettings,
  ({modalType}) => modalType,
)

export const makeSelectTheme = createSelector(
  selectSettings,
  ({theme}) => theme,
)

export const makeSelectLanguage = createSelector(
  selectSettings,
  ({language}) => language,
)
