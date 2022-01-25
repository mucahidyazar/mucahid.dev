import {createSelector} from 'reselect'

const settingsSelector = state => state.articles

export const makeArticlesSelector = createSelector(
  settingsSelector,
  ({articles}) => articles.data,
)

export const makeArticlesStatusSelector = createSelector(
  settingsSelector,
  ({articles}) => articles.status,
)

export const makeArticleSelector = createSelector(
  settingsSelector,
  ({article}) => article.data,
)

export const makeArticleStatusSelector = createSelector(
  settingsSelector,
  ({article}) => article.status,
)

export const makeInstagramSelector = createSelector(
  settingsSelector,
  ({instagram}) => instagram.data,
)

export const makeInstagramStatusSelector = createSelector(
  settingsSelector,
  ({instagram}) => instagram.status,
)

export const makeSelectStarreds = createSelector(
  settingsSelector,
  ({starreds}) => starreds.data,
)

export const makeSelectStarredsStatus = createSelector(
  settingsSelector,
  ({starreds}) => starreds.status,
)
