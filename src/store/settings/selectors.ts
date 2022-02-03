import {createSelector} from 'reselect'

const selectSettings = (state: any) => state.settings

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
