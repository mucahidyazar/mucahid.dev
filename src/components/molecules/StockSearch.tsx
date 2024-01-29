'use client'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import * as z from 'zod'

import {createWishList} from '@/actions/wishlist'
import {useServerAction} from '@/hooks'

import {Input} from '../ui/input'

import Search from './Search'

export default function StockSearch() {
  const [createWishListAction] = useServerAction(createWishList)

  const validationSchema = z.object({
    minPrice: z.number().optional(),
    maxPrice: z.number().optional(),
  })
  const form = useForm({
    defaultValues: {
      minPrice: undefined,
      maxPrice: undefined,
    },
    resolver: zodResolver(validationSchema),
  })

  const values = form.getValues()
  const {minPrice, maxPrice} = values

  const filters = []
  if (minPrice) filters.push('minPrice')
  if (maxPrice) filters.push('maxPrice')

  return (
    <Search
      filters={filters}
      onSubmit={async productUrl => {
        await createWishListAction({
          productUrl,
          ...(minPrice ? {minPrice} : {}),
          ...(maxPrice ? {maxPrice} : {}),
        })
      }}
      placeholder="Product url"
      settingsContent={
        <div className="flex flex-col gap-2 p-2">
          <Input
            placeholder="Min price: Not defined"
            className="shadow-none outline-none ring-0 focus-visible:ring-0"
            {...form.register('minPrice')}
          />
          <Input
            placeholder="Max price: Not defined"
            className="shadow-none outline-none ring-0 focus-visible:ring-0"
            {...form.register('maxPrice')}
          />
        </div>
      }
    />
  )
}
