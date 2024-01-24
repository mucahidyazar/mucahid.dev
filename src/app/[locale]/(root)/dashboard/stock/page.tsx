export const revalidate = 10

import StockTemplate from '@/components/templates/StockTemplate'
import {db} from '@/lib/db'
import {getCurrentUser} from '@/lib/session'

export default async function AdminPage() {
  const user = await getCurrentUser()

  const wishList = await db.wishList.findMany({
    where: {userId: user.id},
  })

  const stockHistories = await db.stockHistory.findMany({
    where: {userId: user.id},
    orderBy: {createdAt: 'desc'},
  })

  return (
    <StockTemplate
      user={user}
      stockHistories={stockHistories}
      wishList={wishList}
    />
  )
}
