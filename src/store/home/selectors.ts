import {createSelector} from 'reselect'

const homeSelector = (state: any) => state.home

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
