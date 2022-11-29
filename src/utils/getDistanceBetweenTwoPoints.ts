export type Coordinate = {
  lat: number
  lon: number
}

type Unit = 'km' | 'mile'

// source of algorithm: https://www.geodatasource.com/developers/javascript
export function getDistanceBetweenTwoPoints(
  cord1: Coordinate,
  cord2: Coordinate,
  unit: Unit = 'km',
) {
  if (cord1.lat === cord2.lat && cord1.lon === cord2.lon) {
    return 0
  }

  const radlat1 = (Math.PI * cord1.lat) / 180
  const radlat2 = (Math.PI * cord2.lat) / 180

  const theta = cord1.lon - cord2.lon
  const radtheta = (Math.PI * theta) / 180

  let dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)

  if (dist > 1) {
    dist = 1
  }

  dist = Math.acos(dist)
  dist = (dist * 180) / Math.PI
  dist = dist * 60 * 1.1515
  if (unit === 'km') {
    dist = dist * 1.609344
  }

  return dist
}
