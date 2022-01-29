import produce from 'immer'

import {Status} from '@/constants'

import * as types from './types'

const INITIAL_STATE = {
  articles: {
    status: null,
    data: [],
    feed: {},
    categories: [],
    years: [],
    filters: {},
    error: null,
  },
  article: {
    status: null,
    data: [],
    feed: {},
    error: null,
  },
}

export const reducer = produce((draft, action) => {
  switch (action.type) {
    case types.GET_ARTICLE_REQUEST:
      draft.article.status = Status.LOADING
      break
    case types.GET_ARTICLE_SUCCESS:
      draft.article.status = Status.OK
      draft.article.data = action.data
      break
    case types.GET_ARTICLE_FAILED:
      draft.article.status = Status.ERROR
      draft.article.error = action.error
      break
    case types.GET_ARTICLES_REQUEST:
      draft.articles.status = Status.LOADING
      break
    case types.GET_ARTICLES_SUCCESS:
      draft.articles.status = Status.OK
      draft.articles.data = action.data
      draft.articles.categories = action.categories
      draft.articles.years = action.years
      draft.articles.feed = action.feed
      break
    case types.GET_ARTICLES_FAILED:
      draft.articles.status = Status.ERROR
      draft.articles.error = action.error
      break

    case types.SET_FILTERS:
      draft.articles.filters = action.filters
      break
    default:
      break
  }
}, INITIAL_STATE)
