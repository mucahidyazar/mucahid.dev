import {Dispatch} from 'redux'
import axios from 'axios'

import {sendEmailData} from '@/types'

import * as types from './types'

export const sendEmail =
  (data: sendEmailData) => async (dispatch: Dispatch) => {
    dispatch({
      type: types.SEND_EMAIL_REQUEST,
    })

    try {
      await axios.post('http://localhost:3000/api/send/email', data)

      dispatch({
        type: types.SEND_EMAIL_SUCCESS,
      })
    } catch (error) {
      dispatch({
        type: types.SEND_EMAIL_FAILED,
        error,
      })
    }
  }
