import axios from 'axios'

import * as types from './types'

export const connectRequest = () => {
  return {
    type: 'CONNECTION_REQUEST',
  }
}

export const sendEmail = (data: any) => async dispatch => {
  dispatch({
    type: types.SEND_EMAIL_REQUEST,
  })

  try {
    const res = await axios.post('http://localhost:3000/api/send/email', data)

    console.log({res})
    dispatch({
      type: types.SEND_EMAIL_SUCCESS,
    })
  } catch (error) {
    console.log({error})
    dispatch({
      type: types.SEND_EMAIL_FAILED,
      error,
    })
  }
}
