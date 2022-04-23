// store.ts
import {AnyAction, Store, combineReducers} from 'redux'
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {createWrapper, HYDRATE} from 'next-redux-wrapper'
import {configureStore} from '@reduxjs/toolkit'
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'

import {State} from '@/types'

import {reducers} from './reducers'

const combinedReducers = combineReducers({
  ...reducers,
})

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
const makeStore = () =>
  configureStore({
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production',
  })

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore)

// Types
const store = makeStore()
export type AppDispatch = typeof store.dispatch
export type ReduxState = ReturnType<typeof reducer>
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>
export const useTypedDispatch = () => useDispatch<TypedDispatch>()
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector
