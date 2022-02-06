import {createSelector} from 'reselect'

import {State} from '@/types'

const mediaSelector = (state: State) => state.media

export const makeInstagramSelector = createSelector(
  mediaSelector,
  ({instagram}) => instagram.data,
)

export const makeInstagramStatusSelector = createSelector(
  mediaSelector,
  ({instagram}) => instagram.status,
)
