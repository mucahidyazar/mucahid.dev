'use client'
import axios from 'axios'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {CITIES_NAME_LAT_LON} from '@/case-studies/mocks'
import {getDistanceBetweenTwoPoints} from '@/utils'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type TTableItem = {
  origin: string
  destination: string
  coordinates: [string, string]
  distance: number
}

const columnHelper = createColumnHelper<TTableItem>()

const columns = [
  columnHelper.accessor('origin', {
    id: 'origin',
    cell: info => info.getValue(),
    header: () => <span>Origin</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('destination', {
    id: 'destination',
    cell: info => info.getValue(),
    header: () => <span>Destination</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('coordinates', {
    id: 'coordinates',
    cell: info => info.getValue(),
    header: () => <span>Coordinates</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('distance', {
    id: 'distance',
    cell: info => info.getValue().toFixed(2) + 'km',
    header: () => <span>Distance</span>,
    footer: info => info.column.id,
  }),
]

const fetchCities = async ({city}: {city: string}) => {
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

const containerStyle = {
  width: '400px',
  height: '400px',
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

export default function Mozio({
  searchParams,
}: {
  searchParams: {[key: string]: string}
}) {
  const origin = searchParams.origin
  const destinations = Object.keys(searchParams)
    .filter(key => key.includes('destination'))
    .map(key => searchParams[key])

  const originCoordinate =
    CITIES_NAME_LAT_LON.find(city => city[0] === origin) ||
    CITIES_NAME_LAT_LON[0]
  const destinationCoordinates = CITIES_NAME_LAT_LON.filter(destination =>
    destinations.includes(destination[0]),
  )

  const allDatas = [...destinationCoordinates, originCoordinate]
  const tableDatas = allDatas
    .map((origin, index) => {
      const originName = origin[0]
      const originLat = origin[1]
      const originLon = origin[2]
      const destinationDatas = allDatas
        .filter(Boolean)
        .filter((_, i) => i !== index)
        .map(destination => {
          if (!destination) return
          const destinationName = destination[0]
          const destinationLat = destination[1]
          const destinationLon = destination[2]
          const distance = getDistanceBetweenTwoPoints(
            {lat: originLat, lon: originLon},
            {lat: destinationLat, lon: destinationLon},
          )
          return {
            origin: originName,
            destination: destinationName,
            coordinates: [originLat, originLon],
            distance,
          }
        })
      return destinationDatas
    })
    .flat()

  const table = useReactTable<any>({
    data: tableDatas,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div id="mozio">
      <div className="flex flex-col gap-2 mb-4">
        {Object.entries(searchParams).map(([key, value]: any) => (
          <div key={key}>
            <span className="capitalize font-semibold italic inline-block w-32 underline">
              {key}
            </span>
            {' : '}
            {value}
          </div>
        ))}
      </div>

      <table className="border border-solid border-white border-opacity-10 mx-auto my-12">
        <thead className="bg-white bg-opacity-10">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="py-2 px-4">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="py-2 px-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>

      <div className="w-[512px] h-[512px] border border-solid border-white border-opacity-10 mx-auto rounded overflow-hidden">
        <MapContainer
          center={[originCoordinate?.[1], originCoordinate?.[2]]}
          zoom={2}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {destinationCoordinates?.map(info => (
            <Marker position={[info[1], info[2]]} key={info[0]}>
              <Popup>This is {info[0]}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  )
}
