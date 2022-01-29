import {reducer as articlesReducer} from './articles'
import {reducer as blockchainReducer} from './blockchain'
import {reducer as contactReducer} from './contact'
import {reducer as mediaReducer} from './media'
import {reducer as projectsReducer} from './projects'
import {reducer as settingsReducer} from './settings'

export const reducers = {
  articles: articlesReducer,
  blockchain: blockchainReducer,
  contact: contactReducer,
  settings: settingsReducer,
  projects: projectsReducer,
  media: mediaReducer,
}
