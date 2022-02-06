import axios from 'axios'
import {Dispatch} from 'redux'

import {News} from '@/types'

import * as types from './types'

export const getAllNews = () => async (dispatch: Dispatch) => {
  try {
    dispatch({type: types.GET_ALL_NEWS_REQUEST})
    const {data} = await axios.get('http://localhost:3000/api/news')

    dispatch({
      type: types.GET_ALL_NEWS_SUCCESS,
      data: data,
    })
  } catch (error) {
    dispatch({
      type: types.GET_ALL_NEWS_FAILED,
      error,
    })
  }
}
export const setNews = (news: News) => async (dispatch: Dispatch) =>
  dispatch({
    type: types.SET_NEWS,
    news,
  })
