import {createSelector} from 'reselect'

const settingsSelector = state => state.articles

export const makeArticlesSelector = createSelector(
  settingsSelector,
  ({articles}) => {
    // if articles.filters object is empty, return articles.data
    if (Object.keys(articles.filters).length === 0) {
      return articles.data
    }

    const filteredArticles = articles.data.filter(item => {
      const {category, year} = articles.filters
      const {categories, pubDate} = item

      if (category?.length > 0) {
        if (typeof category === 'string') {
          if (categories.includes(category)) {
            return true
          }
        } else {
          category.forEach(y => {
            if (categories.includes(y)) {
              return true
            }
          })
        }
      }

      if (year?.length > 0) {
        if (typeof year === 'string') {
          if (pubDate.includes(year)) {
            return true
          }
        } else {
          year.forEach(y => {
            if (pubDate.includes(y)) {
              return true
            }
          })
        }
      }

      return false
    })

    return filteredArticles
  },
)

export const makeSelectCategories = createSelector(
  settingsSelector,
  ({articles}) => articles.categories,
)

export const makeSelectYears = createSelector(
  settingsSelector,
  ({articles}) => articles.years,
)

export const makeSelectFilters = createSelector(
  settingsSelector,
  ({articles}) => articles.filters,
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
