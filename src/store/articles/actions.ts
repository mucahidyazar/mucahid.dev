import * as types from './types'
import axios from 'axios'

export const getArticles = () => async dispatch => {
  try {
    dispatch({type: types.GET_ARTICLES_REQUEST})
    const {data} = await axios.get(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mucahidyazar`,
    )

    dispatch({
      type: types.GET_ARTICLES_SUCCESS,
      data: data.items,
      feed: data.feed,
    })
  } catch (error) {
    dispatch({
      type: types.GET_ARTICLES_FAILED,
      error,
    })
  }
}

export const getArticle = slug => async (dispatch, getState) => {
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
      data: data.find(item => item.link.includes(slug)),
    })
  } catch (error) {
    dispatch({
      type: types.GET_ARTICLE_FAILED,
      error,
    })
  }
}

export const getTweets = () => async dispatch => {
  try {
    dispatch({type: types.GET_TWEETS_REQUEST})

    const res = await axios.get(`http://localhost:3000/api/twitter`)

    dispatch({
      type: types.GET_TWEETS_SUCCESS,
      data: res.data.tweets,
    })
  } catch (error) {
    dispatch({
      type: types.GET_TWEETS_FAILED,
      error,
    })
  }
}

export const getInstagram = () => async dispatch => {
  try {
    dispatch({type: types.GET_INSTAGRAM_REQUEST})

    const res = await axios.get(`https://instagram.com/instagram/?__a=1`)

    dispatch({
      type: types.GET_INSTAGRAM_SUCCESS,
      data: res.data?.graphql?.user?.edge_owner_to_timeline_media.edges.map(
        edge => edge.node.display_url,
      ),
    })
  } catch (error) {
    dispatch({
      type: types.GET_INSTAGRAM_FAILED,
      error,
    })
  }
}

export const getStarreds = () => async dispatch => {
  try {
    dispatch({type: types.GET_STARREDS_REQUEST})

    const {data} = await axios.get(
      `https://api.github.com/users/mucahidyazar/starred`,
    )

    dispatch({
      type: types.GET_STARREDS_SUCCESS,
      data,
    })
  } catch (error) {
    dispatch({
      type: types.GET_STARREDS_FAILED,
      error,
    })
  }
}
// export const startClock = () => dispatch => {
//   return setInterval(
//     () => dispatch({type: tickActionTypes.TICK, light: true, ts: Date.now()}),
//     1000,
//   )
// }
