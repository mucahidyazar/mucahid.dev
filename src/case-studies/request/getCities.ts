import axios from 'axios'

export const getCities = async ({city}: {city: string}) => {
  const {data} = await axios.get(
    '/api/case-studies/mozio/cities-name-lat-lon',
    {
      params: {
        city,
      },
    },
  )
  return data
}
