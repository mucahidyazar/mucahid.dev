import {ParsedUrlQuery} from 'querystring'

import {Dispatch} from 'redux'

import axios from '@/axios'
import {Article, State} from '@/types'

import * as types from './types'

export const getArticles = (): any => async (dispatch: Dispatch) => {
  try {
    dispatch({type: types.GET_ARTICLES_REQUEST})
    const {data} = await axios.get(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mucahidyazar`,
    )

    let years: string[] = []
    let categories: string[] = []
    data.items.forEach((item: Article) => {
      categories = [...categories, ...item.categories]
      years = [...years, item.pubDate.split('-')[0]]
    })
    categories = [...new Set(categories)]
    years = [...new Set(years)]

    const items = data.items.map((item: Article) => ({
      ...item,
      slug: item.guid.split('/')[4],
    }))

    dispatch({
      type: types.GET_ARTICLES_SUCCESS,
      data: items,
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
  async (dispatch: Dispatch, getState: () => State) => {
    try {
      dispatch({type: types.GET_ARTICLE_REQUEST})

      let data = getState()?.blog?.articles?.data

      if (!data.length) {
        await dispatch(getArticles())
      }
      data = getState()?.blog?.articles?.data

      dispatch({
        type: types.GET_ARTICLE_SUCCESS,
        data: data.find((item: Article) => item.link.includes(slug)),
      })
    } catch (error) {
      dispatch({
        type: types.GET_ARTICLE_FAILED,
        error,
      })
    }
  }

export const setFilter =
  (filters: ParsedUrlQuery) => async (dispatch: Dispatch) => {
    dispatch({type: types.SET_FILTERS, filters})
  }

export const addComment =
  (postId: string, comment: string) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({type: types.ADD_COMMENT_REQUEST})

      const res = await axios.post('/api/post/add-comment', {postId, comment})

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
      const res = await axios.get(`/api/post/get-comments?postId=${postId}`)

      dispatch({
        type: types.GET_COMMENTS_SUCCESS,
        data: res.data,
      })
    } catch (error) {
      dispatch({
        type: types.GET_COMMENTS_FAILED,
        error,
      })
    }
  }
