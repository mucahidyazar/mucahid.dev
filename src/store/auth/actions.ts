import * as types from './types'

export const saveAuth = (data: any) => ({
  type: types.SAVE_AUTH,
  data,
})
