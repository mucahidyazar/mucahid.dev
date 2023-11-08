import {redirect} from 'next/navigation'

import {db} from '@/lib/db'

type GetUserDetailArgs = {
  id: string
}
const getUserDetail = async ({id}: GetUserDetailArgs) => {
  return await db.user.findUnique({
    where: {id},
  })
}

type LayoutProps = {
  children: React.ReactNode
  params: {id: string}
}
export default async function Layout({children, params}: LayoutProps) {
  if (!params.id) {
    return redirect('/')
  }

  const userDetail = await getUserDetail({id: params.id})
  if (!userDetail?.id) {
    return redirect('/')
  }

  return children as JSX.Element
}
