import {mainTypes} from './action'

const mainInitialState = {
  isLoadingVisible: false,
}

export function reducer(state = mainInitialState, action) {
  switch (action.type) {
    // case mainTypes.TICK:
    //   return state
    default:
      return state
  }
}
