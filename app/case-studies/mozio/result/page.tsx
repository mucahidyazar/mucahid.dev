'use client'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {CITIES_NAME_LAT_LON} from '@/case-studies/mocks'
import {useSearchParams} from 'next/navigation'
import {toast} from 'react-toastify'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {useQueries} from '@tanstack/react-query'
import {useMemo, useState} from 'react'
import {getDistance} from '@/case-studies/request'

type TTableItem = {
  origin: string
  originCoords: [string, string]
  destination: string
  destinationCoords: [string, string]
  distance: number
}

const columnHelper = createColumnHelper<TTableItem>()

const columns = [
  columnHelper.accessor('origin', {
    id: 'origin',
    cell: info => {
      const sideInfo = info.row.original.originCoords.join(', ')
      const isValidSideInfo = sideInfo !== ', '

      return (
        <div className="flex items-center gap-2">
          <p>{info.getValue()}</p>
          {isValidSideInfo && (
            <span className="text-xs font-light text-gray-400">
              ({sideInfo})
            </span>
          )}
        </div>
      )
    },
    header: () => <span>Origin</span>,
  }),
  columnHelper.accessor('destination', {
    id: 'destination',
    cell: info => {
      const sideInfo = info.row.original.destinationCoords.join(', ')
      const isValidSideInfo = sideInfo !== ', '

      return (
        <div className="flex items-center gap-2">
          <p>{info.getValue()}</p>
          {isValidSideInfo && (
            <span className="text-xs font-light text-gray-400">
              ({sideInfo})
            </span>
          )}{' '}
        </div>
      )
    },
    header: () => <span>Destination</span>,
  }),
  columnHelper.accessor('distance', {
    id: 'distance',
    cell: info => info.getValue().toFixed(2) + 'km',
    header: () => <span>Distance</span>,
  }),
]

export default function Mozio() {
  const searchParams = useSearchParams()
  const origin = searchParams.get('origin')
  const destinations = searchParams.getAll('destination')

  const originCoordinate = CITIES_NAME_LAT_LON.find(city => city[0] === origin)
  const destinationCoordinates = CITIES_NAME_LAT_LON.filter(destination =>
    destinations.includes(destination[0]),
  )

  const allDatas = useMemo(() => {
    const collectedDatas = [...destinationCoordinates, originCoordinate]
    return collectedDatas
      .map((origin, index) => {
        const originName = origin?.[0] || ''
        const originLat = origin?.[1] || ''
        const originLon = origin?.[2] || ''
        const destinationDatas = collectedDatas
          .filter(Boolean)
          .filter((_, i) => i !== index)
          .map(destination => {
            const destinationName = destination?.[0] || ''
            const destinationLat = destination?.[1] || ''
            const destinationLon = destination?.[2] || ''
            return {
              origin: originName,
              originCoords: [originLat, originLon],
              destination: destinationName,
              destinationCoords: [destinationLat, destinationLon],
              distance: 0,
            }
          })
        return destinationDatas
      })
      .flat()
  }, [originCoordinate, destinationCoordinates])
  const [tableDatas, setTableDatas] = useState<any[]>(allDatas)

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
      onError(error: any) {
        console.log(error)
        toast.error(error.message)
      },
    })),
  })

  const informations = [
    {label: 'Origin', value: origin},
    {label: 'Destinations', value: destinations.join(', ')},
    {label: 'Date', value: searchParams.get('date')},
    {label: 'Passengers', value: searchParams.get('passengers')},
  ]

  return (
    <div id="mozio">
      <div className="flex flex-col gap-2 mb-4">
        {informations.map(info => (
          <div key={info.label}>
            <span className="capitalize font-semibold italic inline-block w-32 underline">
              {info.label}
            </span>
            {' : '}
            {info.value}
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
          {table.getRowModel().rows.map(row => {
            const values = row.getAllCells().map(cell => cell.getValue())
            const isAllValid = values.every(Boolean)
            const className = isAllValid ? '' : 'bg-red-400 bg-opacity-50'

            return (
              <tr key={row.id} className={className}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="py-2 px-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            )
          })}
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
