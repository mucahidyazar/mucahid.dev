import {reducer as blogReducer} from './blog'
import {reducer as authReducer} from './auth'
import {reducer as blockchainReducer} from './blockchain'
import {reducer as changelogsReducer} from './changelogs'
import {reducer as contactReducer} from './contact'
import {reducer as generalReducer} from './general'
import {reducer as homeReducer} from './home'
import {reducer as mediaReducer} from './media'
import {reducer as projectsReducer} from './projects'
import {reducer as settingsReducer} from './settings'

export const reducers = {
  blog: blogReducer,
  blockchain: blockchainReducer,
  changelogs: changelogsReducer,
  contact: contactReducer,
  general: generalReducer,
  home: homeReducer,
  settings: settingsReducer,
  projects: projectsReducer,
  media: mediaReducer,
  auth: authReducer,
}
