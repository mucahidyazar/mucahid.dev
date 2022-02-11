import {createSelector} from 'reselect'

import {State} from '@/types'

const homeSelector = (state: State) => state.home

export const makeSelectAllNews = createSelector(
  homeSelector,
  ({allNews}) => allNews.data,
)

export const makeSelectAllNewsStatus = createSelector(
  homeSelector,
  ({allNews}) => allNews.status,
)

export const makeSelectSelectedNews = createSelector(
  homeSelector,
  ({selectedNews}) => selectedNews,
)
