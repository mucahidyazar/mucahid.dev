import router from 'next/router'
import {Dispatch} from 'redux'

import * as types from './types'

export const showLoading = () => ({
  type: types.SHOW_LOADING,
})

export const hideLoading = () => ({
  type: types.HIDE_LOADING,
})

export const setActiveRoute = (route: string) => ({
  type: types.SET_ACTIVE_ROUTE,
  route,
})

export const setModalType = (modalType: string | null) => ({
  type: types.SET_MODAL_TYPE,
  modalType,
})

export const setTheme = () => async (dispatch: Dispatch) => {
  const theme = localStorage.getItem('theme')

  if (theme) {
    dispatch(changeTheme(theme))
  }
}

export const changeTheme = (theme: string) => {
  localStorage.setItem('theme', theme)

  return {
    type: types.CHANGE_THEME,
    theme,
  }
}

export const changeLanguage =
  (language: string) => async (dispatch: Dispatch) => {
    await dispatch({
      type: types.CHANGE_LANGUAGE,
      language,
    })

    if (typeof window !== 'undefined') {
      router.push(router.asPath, router.asPath, {locale: language})
    }
  }
