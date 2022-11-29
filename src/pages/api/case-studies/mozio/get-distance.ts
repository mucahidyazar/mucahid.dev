import type {NextApiRequest, NextApiResponse} from 'next'

import {CITIES_NAME_LAT_LON} from '@/case-studies/mocks'
import {getDistanceBetweenTwoPoints} from '@/utils'

const api = (req: NextApiRequest, res: NextApiResponse) => {
  const params = req.query

  const origin = params?.origin as string
  const destination = params?.destination as string

  if (!origin || !destination) {
    return res
      .status(400)
      .json({message: 'Origin and destination are required'})
  }

  const originCity = CITIES_NAME_LAT_LON.find(cityArray =>
    cityArray[0].toLocaleLowerCase().includes(origin.toLocaleLowerCase()),
  ) as [string, number, number]
  const destinationCity = CITIES_NAME_LAT_LON.find(cityArray =>
    cityArray[0].toLocaleLowerCase().includes(destination.toLocaleLowerCase()),
  ) as [string, number, number]
  const originLat = originCity[1]
  const originLon = originCity[2]
  const destinationLat = destinationCity[1]
  const destinationLon = destinationCity[2]

  const distance = getDistanceBetweenTwoPoints(
    {lat: originLat, lon: originLon},
    {lat: destinationLat, lon: destinationLon},
  )

  if (distance) {
    return res.status(200).json({
      distance,
    })
  }

  return res.status(400).json({
    message: 'Invalid origin or destination',
  })
}

export default api
