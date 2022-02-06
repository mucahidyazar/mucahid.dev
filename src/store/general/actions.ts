import {Dispatch} from 'redux'

import * as types from './types'

export const addActiveUser =
  (user: any): any =>
  async (dispatch: Dispatch, getState: any) => {
    const prevActiveUsers = getState()?.general?.activeUsers
    const isThereSameUser = prevActiveUsers.some(u => u.id === user.id)
    if (isThereSameUser) {
      return
    } else {
      dispatch({
        type: types.ADD_ACTIVE_USER,
        activeUsers: [...prevActiveUsers, user],
      })
    }
  }

export const removeActiveUser =
  (user: any): any =>
  async (dispatch: Dispatch, getState: any) =>
    dispatch({
      type: types.REMOVE_ACTIVE_USER,
      activeUsers: getState()?.general?.activeUsers?.filter(
        (u: any) => u.id !== user.id,
      ),
    })
