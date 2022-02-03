import {createSelector} from 'reselect'

const mediaSelector = (state: any) => state.media

export const makeInstagramSelector = createSelector(
  mediaSelector,
  ({instagram}) => instagram.data,
)

export const makeInstagramStatusSelector = createSelector(
  mediaSelector,
  ({instagram}) => instagram.status,
)
