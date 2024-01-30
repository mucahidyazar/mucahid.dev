'use client'
export const revalidate = 10
import {User, StockHistory, WishList} from '@prisma/client'
import {Archive, PauseIcon, PlayIcon, TrashIcon} from 'lucide-react'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import io from 'socket.io-client'

import {removeWishList, updateWishList} from '@/actions/wishlist'
import {env} from '@/configs/env.mjs'
import {useServerAction} from '@/hooks'

import {StockLogs} from '../molecules/StockLogs'
import StockSearch from '../molecules/StockSearch'
import {Button} from '../ui/button'

type StockTemplateProps = {
  user: User
  wishList?: WishList[]
  stockHistories?: StockHistory[]
}
type LocalHistory = StockHistory & {isNew?: boolean}
export default function StockTemplate({
  stockHistories = [],
  user,
  wishList,
}: StockTemplateProps) {
  const [updateWishListAction, updateWishListIsPending] =
    useServerAction(updateWishList)
  const [removeWishListAction, removeWishListIsPending] =
    useServerAction(removeWishList)

  const [historyList, setHistoryList] = useState<LocalHistory[]>(
    stockHistories.slice(0, 20),
  )

  useEffect(() => {
    // Sunucunuzun URL'si
    // const socket = io('https://api.mucahid.dev')
    const socket = io(env.NEXT_PUBLIC_EXTARNAL_API_URL)
    socket.emit('join', user.id)

    // Fiyat güncellemelerini dinle
    socket.on('newHistory', data => {
      const first19 = historyList.slice(0, 19)
      setHistoryList([{...data.history, isNew: true}, ...first19])
    })

    // Komponent unmount edildiğinde bağlantıyı kapat
    return () => {
      socket.off('newHistory')
      socket.disconnect()
    }
  }, [user.id])

  return (
    <div className="flex flex-col items-center gap-4">
      <StockSearch />
      <div className="grid h-[30rem] w-full grid-cols-3  gap-2">
        <div className="col-span-2 w-full overflow-y-auto rounded-md border border-foreground border-opacity-10 bg-foreground bg-opacity-5">
          <div className="flex flex-wrap gap-2 p-2">
            {wishList?.map((data: any) => (
              <div
                className="min-w-[12rem] max-w-[calc(100%/3-6px)] bg-foreground bg-opacity-40"
                key={data.id}
              >
                <Image
                  src={data.productImage || 'https://picsum.photos/200/300'}
                  alt={data.productName || 'Product image'}
                  objectFit="cover"
                  className="h-40 w-full"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col gap-1 p-2 text-xs text-foreground">
                  <a
                    href={data.productUrl}
                    target="_blank"
                    className="line-clamp-1 italic hover:underline"
                  >
                    {data.productUrl}
                  </a>
                  <p className="line-clamp-2 font-semibold">
                    {data.productName}
                  </p>
                  <p>{data.productPrice}</p>
                </div>

                <div className="flex w-full items-center gap-2 px-2 pb-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full text-red-500 hover:bg-red-500 hover:bg-opacity-10 hover:text-red-600"
                    disabled={removeWishListIsPending}
                    isLoading={removeWishListIsPending}
                    onClick={() => {
                      removeWishListAction(data.id)
                    }}
                  >
                    <TrashIcon size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full text-indigo-500 hover:bg-indigo-500 hover:bg-opacity-10 hover:text-indigo-600"
                    disabled={updateWishListIsPending}
                    isLoading={updateWishListIsPending}
                    onClick={() => {
                      updateWishListAction({
                        wishlistId: data.id,
                        status: 'archived',
                      })
                    }}
                  >
                    <Archive size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full text-foreground"
                    disabled={updateWishListIsPending}
                    isLoading={updateWishListIsPending}
                    onClick={() => {
                      updateWishListAction({
                        wishlistId: data.id,
                        status:
                          data.status === 'active' ? 'inactive' : 'active',
                      })
                    }}
                  >
                    {data.status === 'active' ? (
                      <PauseIcon size={16} />
                    ) : (
                      <PlayIcon size={16} />
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <StockLogs logs={historyList} />
      </div>
    </div>
  )
}
