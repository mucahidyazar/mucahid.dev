import produce from 'immer'

import {Status} from '@/constants'
import {HomeState} from '@/types'

import * as types from './types'

const INITIAL_STATE: HomeState = {
  allNews: {
    status: Status.INIT,
    data: [],
    error: null,
  },
  selectedNews: null,
}

export const reducer = produce((draft, action) => {
  switch (action.type) {
    case types.GET_ALL_NEWS_REQUEST:
      draft.allNews.status = Status.LOADING
      break
    case types.GET_ALL_NEWS_SUCCESS:
      draft.allNews.status = Status.OK
      draft.allNews.data = action.data
      break
    case types.GET_ALL_NEWS_FAILED:
      draft.allNews.status = Status.ERROR
      draft.allNews.error = action.error
      break

    case types.SET_NEWS:
      draft.selectedNews = action.news
      break

    default:
      break
  }
}, INITIAL_STATE)
