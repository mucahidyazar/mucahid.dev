import produce from 'immer'

// import {Status} from '@/constants'

// import * as types from './types'

const INITIAL_STATE = {
  messages: {
    status: null,
    data: [],
    error: null,
  },
  board: {
    status: null,
    data: [],
    error: null,
  },
}

export const reducer = produce((draft, action) => {
  switch (action.type) {
    default:
      break
  }
}, INITIAL_STATE)
