import {createSelector} from 'reselect'
import {i18n} from 'next-i18next'

import {RouteModel, State} from '@/types'

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
    const routes = i18n?.t('navbar', {returnObjects: true}) as RouteModel[]
    const activePage = routes?.find(item => item.route === activeRoute)?.name
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
