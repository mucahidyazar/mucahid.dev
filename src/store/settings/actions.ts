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

export const setModalType = (modalType: string) => ({
  type: types.SET_MODAL_TYPE,
  modalType,
})

export const changeTheme = () => {
  const theme = localStorage.getItem('theme')

  if (theme) {
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')

    return {
      type: types.CHANGE_THEME,
      theme,
    }
  }

  return {
    type: types.CHANGE_THEME,
  }
}

export const changeLanguage = () => ({
  type: types.CHANGE_LANGUAGE,
})
