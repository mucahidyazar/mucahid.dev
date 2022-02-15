import {createSelector} from 'reselect'

import {State} from '@/types'

const mediaSelector = (state: State) => state.changelogs

export const makeSelectChangelogs = createSelector(
  mediaSelector,
  ({changelogs}) => changelogs.data,
)
