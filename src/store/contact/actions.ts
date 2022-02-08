import {Dispatch} from 'redux'
import {toast} from 'react-toastify'

import axios from '@/axios'
import {sendEmailData} from '@/types'

import * as types from './types'

export const sendEmail =
  (data: sendEmailData) => async (dispatch: Dispatch) => {
    dispatch({
      type: types.SEND_EMAIL_REQUEST,
    })

    try {
      await axios.post('/api/send/email', data)

      toast('Your message was been sent successfuly', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })

      dispatch({
        type: types.SEND_EMAIL_SUCCESS,
      })
    } catch (error) {
      toast('Your message was not been sent :(', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      dispatch({
        type: types.SEND_EMAIL_FAILED,
        error,
      })
    }
  }
