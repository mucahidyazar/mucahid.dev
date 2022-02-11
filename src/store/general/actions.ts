import {Dispatch} from 'redux'

import {State, User} from '@/types'

import * as types from './types'

export const addActiveUser =
  (user: User) => async (dispatch: Dispatch, getState: () => State) => {
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
  (user: User) => async (dispatch: Dispatch, getState: () => State) =>
    dispatch({
      type: types.REMOVE_ACTIVE_USER,
      activeUsers: getState()?.general?.activeUsers?.filter(
        u => u.id !== user.id,
      ),
    })
