'use client'
import axios from 'axios'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {CITIES_NAME_LAT_LON} from '@/case-studies/mocks'
import {useSearchParams} from 'next/navigation'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {useQueries} from '@tanstack/react-query'
import {useState} from 'react'

type TTableItem = {
  origin: string
  destination: string
  coordinates: [string, string]
  distance: number
}

const getDistance = async ({
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

const columnHelper = createColumnHelper<TTableItem>()

const columns = [
  columnHelper.accessor('origin', {
    id: 'origin',
    cell: info => info.getValue(),
    header: () => <span>Origin</span>,
  }),
  columnHelper.accessor('destination', {
    id: 'destination',
    cell: info => info.getValue(),
    header: () => <span>Destination</span>,
  }),
  columnHelper.accessor('coordinates', {
    id: 'coordinates',
    cell: info => info.getValue(),
    header: () => <span>Coordinates</span>,
  }),
  columnHelper.accessor('distance', {
    id: 'distance',
    cell: info => info.getValue().toFixed(2) + 'km',
    header: () => <span>Distance</span>,
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

type TSearchParams = {
  [key: string]: string
}

export default function Mozio() {
  const searchParams = useSearchParams()
  const origin = searchParams.get('origin')
  const destinations = searchParams.getAll('destination')

  const originCoordinate =
    CITIES_NAME_LAT_LON.find(city => city[0] === origin) ||
    CITIES_NAME_LAT_LON[0]
  const destinationCoordinates = CITIES_NAME_LAT_LON.filter(destination =>
    destinations.includes(destination[0]),
  )

  const allDatas = [...destinationCoordinates, originCoordinate]
  const [tableDatas, setTableDatas] = useState<any[]>(
    allDatas
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
            return {
              origin: originName,
              destination: destinationName,
              coordinates: [originLat, originLon],
              distance: 0,
            }
          })
        return destinationDatas
      })
      .flat(),
  )

  const table = useReactTable<any>({
    data: tableDatas,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  useQueries({
    queries: tableDatas.map(({origin, destination}: any) => ({
      queryKey: [origin, destination],
      queryFn: () => getDistance({origin, destination}),
      onSuccess(data: any) {
        setTableDatas(prev => {
          const newData = prev.map(item => {
            if (item.origin === origin && item.destination === destination) {
              return {
                ...item,
                distance: data.distance,
              }
            }
            return item
          })
          return newData
        })
      },
    })),
  })

  return (
    <div id="mozio">
      <div className="flex flex-col gap-2 mb-4">
        <div>
          <span className="capitalize font-semibold italic inline-block w-32 underline">
            Origin
          </span>
          {' : '}
          {origin}
        </div>
        <div>
          <span className="capitalize font-semibold italic inline-block w-32 underline">
            Destinatinations
          </span>
          {' : '}
          {destinations.join(', ')}
        </div>
        <div>
          <span className="capitalize font-semibold italic inline-block w-32 underline">
            Date
          </span>
          {' : '}
          {searchParams.get('date')}
        </div>

        <div>
          <span className="capitalize font-semibold italic inline-block w-32 underline">
            Passengers
          </span>
          {' : '}
          {searchParams.get('passengers')}
        </div>
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

      {originCoordinate?.[1] &&
        originCoordinate?.[2] &&
        typeof window !== 'undefined' && (
          <div className="w-[512px] h-[512px] border border-solid border-white border-opacity-10 mx-auto rounded overflow-hidden">
            <MapContainer
              center={[originCoordinate[1], originCoordinate[2]]}
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
        )}
    </div>
  )
}
