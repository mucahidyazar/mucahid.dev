import axios from 'axios'

export const getDistance = async ({
  origin,
  destination,
}: {
  origin: string
  destination: string
}) => {
  const {data} = await axios.get('/api/case-studies/mozio/get-distance', {
    params: {
      origin,
      destination,
    },
  })
  return data
}
