import {Dispatch} from 'redux'

import axios from '@/axios'

import * as types from './types'

export const getChangelogs = (): any => async (dispatch: Dispatch) => {
  try {
    dispatch({type: types.GET_CHANGELOGS_REQUEST})

    const {data} = await axios.get(
      'https://api.github.com/repos/mucahidyazar/mucahid.dev/releases',
    )

    dispatch({
      type: types.GET_CHANGELOGS_SUCCESS,
      data: data.map((item: any) => ({
        id: item.id,
        url: item.url,
        assetsUrl: item.assets_url,
        author: item.author,
        tag: item.tag_name,
        name: item.name,
        createdAt: item.created_at,
        publishedAt: item.published_at,
        body: item.body,
      })),
    })
  } catch (error) {
    dispatch({
      type: types.GET_CHANGELOGS_FAILED,
      error,
    })
  }
}
