import {reducer as mainReducer} from './main'
import {reducer as settingsReducer} from './settings'
import {reducer as articlesRedducer} from './articles'

export const reducers = {
  main: mainReducer,
  settings: settingsReducer,
  articles: articlesRedducer,
}
