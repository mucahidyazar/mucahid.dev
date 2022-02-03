import {createSelector} from 'reselect'

const selectProjects = (state: any) => state.projects

// id: '1',
// type: 'hard disk',
// name: 'WD Red 4TB',
// price: 'Rp. 1.500.000',
// tags: ['WD', 'Red', '4TB'],
// image:

export const makeSelectApis = createSelector(selectProjects, ({apis}) =>
  apis?.data.slice(0, 40).map((api: any) => ({
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
