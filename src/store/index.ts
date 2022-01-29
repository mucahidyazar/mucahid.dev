// store.ts
import {
  createStore,
  AnyAction,
  Store,
  combineReducers,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import {createWrapper, HYDRATE} from 'next-redux-wrapper'
import {reducers} from './reducers'

export interface State {
  tick: string
}

const combinedReducers = combineReducers({
  ...reducers,
})

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

// create your reducer
const reducer = (state: State, action: AnyAction) => {
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
const makeStore = () => createStore(reducer, bindMiddleware([thunk]))

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore)
