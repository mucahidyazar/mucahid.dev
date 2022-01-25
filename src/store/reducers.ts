import {reducer as articlesReducer} from './articles'
import {reducer as blockchainReducer} from './blockchain'
import {reducer as mainReducer} from './main'
import {reducer as settingsReducer} from './settings'

export const reducers = {
  articles: articlesReducer,
  blockchain: blockchainReducer,
  main: mainReducer,
  settings: settingsReducer,
}
