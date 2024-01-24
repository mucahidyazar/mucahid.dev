'use client'
export const revalidate = 10
import {zodResolver} from '@hookform/resolvers/zod'
import {SearchIcon, Settings} from 'lucide-react'
import {useForm} from 'react-hook-form'
import * as z from 'zod'

import {createWishList} from '@/actions/wishlist'
import {useServerAction} from '@/hooks'

import {Badge} from '../ui/badge'
import {Button} from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import {Input} from '../ui/input'

export default function StockSearch() {
  const [createWishListAction, createWishListIsPending] =
    useServerAction(createWishList)

  const validationSchema = z.object({
    productUrl: z.string().url(),
    minPrice: z.number().optional(),
    maxPrice: z.number().optional(),
  })
  type FormValues = z.infer<typeof validationSchema>
  const form = useForm({
    defaultValues: {
      productUrl: '',
      minPrice: undefined,
      maxPrice: undefined,
    },
    resolver: zodResolver(validationSchema),
  })

  const submitHandler = async ({
    productUrl,
    minPrice,
    maxPrice,
  }: FormValues) => {
    await createWishListAction({
      productUrl: productUrl,
      ...(minPrice && {minPrice}),
      ...(maxPrice && {maxPrice}),
    } as any)
  }

  const values = form.getValues()
  const {minPrice, maxPrice} = values

  return (
    <form
      className="flex w-full flex-col gap-2"
      onSubmit={form.handleSubmit(submitHandler)}
    >
      <div className="relative">
        <Input
          placeholder="Product url"
          {...form.register('productUrl')}
          className="h-12"
        />
        <div className="absolute right-2 top-1/2 flex -translate-y-1/2 transform items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                size="sm"
                type="submit"
                variant="ghost"
                className="translate-x-4"
              >
                <Settings size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
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
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            size="sm"
            type="submit"
            variant="ghost"
            disabled={createWishListIsPending}
            isLoading={createWishListIsPending}
          >
            <SearchIcon size={16} />
          </Button>
        </div>
      </div>
      {(minPrice || maxPrice) && (
        <Badge className="flex w-fit items-center gap-2">
          <span>{minPrice || '0'}</span>
          <span> - </span>
          <span>{maxPrice || '∞'}</span>
        </Badge>
      )}
    </form>
  )
}
