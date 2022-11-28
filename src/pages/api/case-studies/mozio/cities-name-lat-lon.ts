import type {NextApiRequest, NextApiResponse} from 'next'

import {CITIES_NAME_LAT_LON} from '@/case-studies/mocks'

const api = (req: NextApiRequest, res: NextApiResponse) => {
  const params = req.query

  const city: any = params?.city
  const cities = CITIES_NAME_LAT_LON.map(cityArray =>
    cityArray[0].toLocaleLowerCase().includes(city.toLocaleLowerCase())
      ? cityArray
      : null,
  ).filter(Boolean)

  return res.status(200).json({
    cities,
  })
}

export default api
