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

export const addComment =
  (postId: string, comment: string): any =>
  async (dispatch: Dispatch, getState: any) => {
    try {
      dispatch({type: types.ADD_COMMENT_REQUEST})

      const res = await axios.post(
        'http://localhost:3000/api/post/add-comment',
        {postId, comment},
      )

      dispatch({
        type: types.ADD_COMMENT_SUCCESS,
        data: res.data,
      })
      dispatch(getComments(postId))
    } catch (error) {
      dispatch({
        type: types.ADD_COMMENT_FAILED,
        error,
      })
    }
  }

export const getComments =
  (postId: string): any =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({type: types.GET_COMMENTS_REQUEST})
      console.log('x')
      console.log(typeof postId)
      const res = await axios.get(
        `http://localhost:3000/api/post/get-comments?postId=${postId}`,
      )

      console.log({x: res.data})
      dispatch({
        type: types.GET_COMMENTS_SUCCESS,
        data: res.data,
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: types.GET_COMMENTS_FAILED,
        error,
      })
    }
  }
