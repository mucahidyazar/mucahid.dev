import axios from 'axios'
import {Dispatch} from 'redux'

import * as types from './types'

export const getArticles = (): any => async (dispatch: Dispatch) => {
  try {
    dispatch({type: types.GET_ARTICLES_REQUEST})
    const {data} = await axios.get(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mucahidyazar`,
    )

    let years: any = []
    let categories: any = []
    data.items.forEach((item: any) => {
      categories = [...categories, ...item.categories]
      years = [...years, item.pubDate.split('-')[0]]
    })
    categories = [...new Set(categories)]
    years = [...new Set(years)]

    dispatch({
      type: types.GET_ARTICLES_SUCCESS,
      data: data.items,
      feed: data.feed,
      categories,
      years,
    })
  } catch (error) {
    dispatch({
      type: types.GET_ARTICLES_FAILED,
      error,
    })
  }
}

export const getArticle =
  (slug: string): any =>
  async (dispatch: Dispatch, getState: any) => {
    try {
      dispatch({type: types.GET_ARTICLE_REQUEST})

      let data = getState()?.articles?.articles?.data

      if (!data.length) {
        const res = await axios.get(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mucahidyazar`,
        )
        data = res.data?.items
      }

      dispatch({
        type: types.GET_ARTICLE_SUCCESS,
        data: data.find((item: any) => item.link.includes(slug)),
      })
    } catch (error) {
      dispatch({
        type: types.GET_ARTICLE_FAILED,
        error,
      })
    }
  }

export const setFilter = (filters: any) => async (dispatch: Dispatch) => {
  dispatch({type: types.SET_FILTERS, filters})
}
