// store.ts
import {
  createStore,
  AnyAction,
  Store,
  combineReducers,
  applyMiddleware,
  Middleware,
} from 'redux'
import thunk from 'redux-thunk'
import {createWrapper, HYDRATE} from 'next-redux-wrapper'

import {State} from '@/types'

import {reducers} from './reducers'

const combinedReducers = combineReducers({
  ...reducers,
})

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('@redux-devtools/extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

// create your reducer
const reducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    return nextState
  }

  return combinedReducers(state, action)
}
export type RootState = ReturnType<typeof reducer>

// create a makeStore function
const makeStore = () => createStore(reducer, bindMiddleware([thunk]))

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore)
