// store.ts
import {
  createStore,
  AnyAction,
  Store,
  combineReducers,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper'
import * as reducers from './reducers'

export interface State {
  tick: string
}

const combinedReducers = combineReducers({
  ...reducers,
})

// create your reducer
const reducer = (state: State = {tick: 'init'}, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    return nextState
  }

  return combinedReducers(state, action)
}

// create a makeStore function
const makeStore = (context: Context) =>
  createStore(reducer, applyMiddleware(thunk))

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, {debug: true})
