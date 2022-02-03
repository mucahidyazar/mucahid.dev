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
