import axios from 'axios'
import * as types from './types'

export const saveAuth = (data: any) => ({
  type: types.SAVE_AUTH,
  data,
})

export const setNewsletter = (data: any) => async dispatch => {
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
