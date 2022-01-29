import * as types from './types'
import axios from 'axios'

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
