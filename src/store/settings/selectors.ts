import {createSelector} from 'reselect'

import {State} from '@/types'

import routes from '../../../config/routes.json'

const selectSettings = (state: State) => state.settings

export const makeSelectIsLoadingVisible = createSelector(
  selectSettings,
  ({isLoadingVisible}) => isLoadingVisible,
)

export const makeSelectActiveRoute = createSelector(
  selectSettings,
  ({activeRoute}) => activeRoute,
)

export const makeSelectActivePage = createSelector(
  selectSettings,
  ({activeRoute}) => {
    const activePage = routes?.find(
      item => item.filePath === activeRoute,
    )?.activePage
    return activePage
  },
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
