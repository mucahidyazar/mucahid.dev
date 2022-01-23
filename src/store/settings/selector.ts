import {createSelector} from 'reselect'

const settingsSelector = state => state.settings

export const isLoadingVisibleSelector = createSelector(
  settingsSelector,
  ({isLoadingVisible}) => isLoadingVisible,
)
