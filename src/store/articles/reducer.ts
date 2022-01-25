import * as types from './types'
import produce from 'immer'
import {Status} from '@/constants/index'

const INITIAL_STATE = {
  articles: {
    status: null,
    data: [],
    feed: {},
    error: null,
  },
  article: {
    status: null,
    data: [],
    feed: {},
    error: null,
  },
  tweets: {
    status: null,
    data: [],
    error: null,
  },
  instagram: {
    status: null,
    data: [],
    error: null,
  },
  starreds: {
    status: null,
    data: [],
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
      draft.articles.feed = action.feed
      break
    case types.GET_ARTICLES_FAILED:
      draft.articles.status = Status.ERROR
      draft.articles.error = action.error
      break
    case types.GET_TWEETS_REQUEST:
      draft.tweets.status = Status.LOADING
      break
    case types.GET_TWEETS_SUCCESS:
      draft.tweets.status = Status.OK
      draft.tweets.data = action.data
      break
    case types.GET_TWEETS_FAILED:
      draft.tweets.status = Status.ERROR
      draft.tweets.error = action.error
      break
    case types.GET_INSTAGRAM_REQUEST:
      draft.instagram.status = Status.LOADING
      break
    case types.GET_INSTAGRAM_SUCCESS:
      draft.instagram.status = Status.OK
      draft.instagram.data = action.data
      break
    case types.GET_INSTAGRAM_FAILED:
      draft.instagram.status = Status.ERROR
      draft.instagram.error = action.error
      break
    case types.GET_STARREDS_REQUEST:
      draft.starreds.status = Status.LOADING
      break
    case types.GET_STARREDS_SUCCESS:
      draft.starreds.status = Status.OK
      draft.starreds.data = action.data
      break
    case types.GET_STARREDS_FAILED:
      draft.starreds.status = Status.ERROR
      draft.starreds.error = action.error
      break
    default:
      break
  }
}, INITIAL_STATE)
