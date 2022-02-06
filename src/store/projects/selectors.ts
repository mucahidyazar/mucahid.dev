import {createSelector} from 'reselect'

import {API, State} from '@/types'

const selectProjects = (state: State) => state.projects

export const makeSelectApis = createSelector(selectProjects, ({apis}) =>
  apis?.data.slice(0, 40).map((api: API) => ({
    id: api.API,
    name: api.API,
    text: api.Description,
    tags: [],
    link: api.Link,
    category: api.Category,
    subtitles: [
      `Auth: ${api.Auth}`,
      `HTTPS: ${api.HTTPS}`,
      `Cors: ${api.CORS ? 'Yes' : 'No'}`,
    ],
  })),
)

export const makeSelectApisStatus = createSelector(
  selectProjects,
  ({apis}) => apis.status,
)

export const makeSelectStarreds = createSelector(
  selectProjects,
  ({starreds}) => starreds.data,
)

export const makeSelectStarredsStatus = createSelector(
  selectProjects,
  ({starreds}) => starreds.status,
)
