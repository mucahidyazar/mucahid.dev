'use client'
import {Fragment, useState} from 'react'
import {Combobox} from '@headlessui/react'
import {useQuery} from '@tanstack/react-query'
import {CheckIcon} from '@heroicons/react/20/solid'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useRouter, useSearchParams} from 'next/navigation'
import {getCities} from '@/case-studies/request'

export default function Mozio() {
  const searchParams = useSearchParams()
  const destinationParams = searchParams.getAll('destination')

  const [destinations, setDestinations] = useState<any>(
    destinationParams?.length ? destinationParams : [''],
  )
  const [query, setQuery] = useState('')
  const router = useRouter()

  const {data: citiesData} = useQuery<{cities: [string, number, number][]}>(
    ['cities', query],
    () => getCities({city: query}),
  )
  const cities = citiesData?.cities

  const validationSchema = yup.object({
    origin: yup.string().required(),
    ...destinations.reduce((acc: any, _: any, index: number) => {
      acc[`destination${index}`] = yup.string().required()
      return acc
    }, {}),
    date: yup.date().test('is-future', 'Date must be in the future', value => {
      if (!value) return true
      return new Date(value) > new Date()
    }),
    passengers: yup.number().required(),
  })

  const {
    handleSubmit,
    register,
    formState: {errors},
    getValues,
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      origin: searchParams.get('origin') || '',
      date: searchParams.get('date') || '',
      passengers: searchParams.get('passengers') || '',
      ...destinationParams.reduce(
        (acc: any, destination: string, index: number) => {
          acc[`destination${index}`] = destination
          return acc
        },
        {},
      ),
    },
  })

  const onSubmit = (data: any) => {
    const query = Object.keys(data)
    const queryString = query
      .map(key => {
        if (key.includes('destination')) {
          return `destination=${data[key]}`
        }
        return `${key}=${data[key]}`
      })
      .join('&')
      .replace(/%2C/g, ',')
    router.push(`/case-studies/mozio/result?${queryString}`)
  }

  return (
    <div id="mozio">
      <form
        className="flex flex-col gap-2 w-1/2 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Combobox
          onChange={value => {
            setValue('origin', value)
          }}
        >
          <Combobox.Input
            {...register('origin')}
            onChange={event => {
              const timeout = setTimeout(() => {
                setQuery(event.target.value)
              }, 1000)
              return () => clearTimeout(timeout)
            }}
            displayValue={(city: string) => getValues().origin || city}
            className={`p-2 bg-transparent bg-opacity-20 text-gray-300 border border-solid border-white border-opacity-10 rounded placeholder-white placeholder-opacity-20 ${
              errors?.origin ? 'border-red-500 border-opacity-100' : ''
            }`}
            type="text"
            placeholder="origin"
          />
          <Combobox.Options>
            {cities?.map(city => (
              /* Use the `active` state to conditionally style the active option. */
              /* Use the `selected` state to conditionally style the selected option. */
              <Combobox.Option key={city?.[0]} value={city?.[0]} as={Fragment}>
                {({active, selected}) => (
                  <li
                    className={`py-2 px-4 bg-opacity-20 ${
                      active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                    }`}
                  >
                    {selected && <CheckIcon />}
                    {city?.[0]}
                  </li>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>

        <div className="w-full flex flex-col gap-1">
          {destinations.map((_item: any, index: number) => (
            <Combobox
              key={index}
              onChange={value => {
                setValue(`destination${index}`, value)
              }}
            >
              <Combobox.Input
                {...register(`destination${index}`)}
                onChange={(event: any) => {
                  const timeout = setTimeout(() => {
                    setQuery(event.target.value)
                  }, 1000)
                  return () => clearTimeout(timeout)
                }}
                displayValue={(city: string) =>
                  getValues()?.[`destination${index}`] || city
                }
                className={`p-2 bg-transparent bg-opacity-20 text-gray-300 border border-solid border-white border-opacity-10 rounded placeholder-white placeholder-opacity-20 ${
                  errors?.[`destination${index}`]
                    ? 'border-red-500 border-opacity-100'
                    : ''
                }`}
                type="text"
                placeholder="destination"
              />
              <Combobox.Options>
                {cities?.map(city => (
                  /* Use the `active` state to conditionally style the active option. */
                  /* Use the `selected` state to conditionally style the selected option. */
                  <Combobox.Option
                    key={city?.[0]}
                    value={city[0]}
                    as={Fragment}
                  >
                    {({active, selected}) => (
                      <li
                        className={`py-2 px-4 bg-opacity-20 ${
                          active
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-black'
                        }`}
                      >
                        {selected && <CheckIcon />}
                        {city?.[0]}
                      </li>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </Combobox>
          ))}
          <button
            className="w-full p-2 rounded bg-purple-500 bg-opacity-10 hover:bg-opacity-20 text-white ml-auto duration-150"
            onClick={() => setDestinations((prev: any) => [...prev, {}])}
          >
            +
          </button>
        </div>
        <div className="flex flex-col w-full">
          <input
            className={`p-2 bg-transparent bg-opacity-20 text-gray-300 border border-solid border-white border-opacity-10 rounded placeholder-white placeholder-opacity-20 ${
              errors?.date ? 'border-red-500 border-opacity-100' : ''
            }`}
            id="date"
            type="date"
            {...register('date')}
          />
          {errors.date && (
            <span className="text-red-500">{String(errors.date.message)}</span>
          )}
        </div>
        <div className="flex flex-col w-full">
          <input
            className={`p-2 bg-transparent bg-opacity-20 text-gray-300 border border-solid border-white border-opacity-10 rounded placeholder-white placeholder-opacity-20 focus:border-none ${
              errors?.passengers ? 'border-red-500 border-opacity-100' : ''
            }`}
            id="passengers"
            type="number"
            placeholder="passengers"
            {...register('passengers')}
          />
          {errors.passengers && (
            <span className="text-red-500">
              {String(errors.passengers.message)}
            </span>
          )}
        </div>
        <button
          className="w-full p-2 rounded bg-purple-500 text-white ml-auto"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  )
}
