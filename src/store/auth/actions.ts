import {Dispatch} from 'redux'

import axios from '@/axios'
import {AuthState, newsletterData} from '@/types'

import * as types from './types'

export const saveAuth = (data: AuthState) => ({
  type: types.SAVE_AUTH,
  data,
})

export const setNewsletter =
  (data: newsletterData) => async (dispatch: Dispatch) => {
    dispatch({
      type: types.SET_NEWSLETTER_REQUEST,
    })

    try {
      await axios.post('/api/newsletter', data)

      dispatch({
        type: types.SET_NEWSLETTER_SUCCESS,
      })
    } catch (error) {
      dispatch({
        type: types.SET_NEWSLETTER_FAILED,
        error,
      })
    }
  }

export const getUserMetamasks = () => async (dispatch: Dispatch) => {
  dispatch({
    type: types.GET_USER_METAMASKS_REQUEST,
  })

  try {
    const {data} = await axios.get('/api/general/get-user-metamasks')

    dispatch({
      type: types.GET_USER_METAMASKS_SUCCESS,
      data,
    })
  } catch (error) {
    dispatch({
      type: types.GET_USER_METAMASKS_FAILED,
      error,
    })
  }
}
