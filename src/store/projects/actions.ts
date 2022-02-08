import {Dispatch} from 'redux'

import axios from '@/axios'

import * as types from './types'

export const getApis = () => async (dispatch: Dispatch) => {
  try {
    dispatch({type: types.GET_APIS_REQUEST})

    const {data} = await axios.get(`https://api.publicapis.org/entries`)

    dispatch({
      type: types.GET_APIS_SUCCESS,
      data: data.entries,
      count: data.count,
    })
  } catch (error) {
    dispatch({
      type: types.GET_APIS_FAILED,
      error,
    })
  }
}

export const getStarreds = () => async (dispatch: Dispatch) => {
  try {
    dispatch({type: types.GET_STARREDS_REQUEST})

    const {data} = await axios.get(
      `https://api.github.com/users/mucahidyazar/starred`,
    )

    dispatch({
      type: types.GET_STARREDS_SUCCESS,
      data,
    })
  } catch (error) {
    dispatch({
      type: types.GET_STARREDS_FAILED,
      error,
    })
  }
}
