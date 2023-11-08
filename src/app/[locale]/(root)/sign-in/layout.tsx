import {redirect} from 'next/navigation'

import {getCurrentUser} from '@/lib/session'

type Props = {
  children: React.ReactNode
}

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default async function Layout({children}: Props) {
  const user = await getCurrentUser()

  if (user) {
    redirect(`/profile/${user.id}`)
  }

  return children as JSX.Element
}
