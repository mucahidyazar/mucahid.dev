/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import {redirect} from 'next/navigation'

import {Tabs} from '@/components/molecules/tabs'
import {getCurrentSession} from '@/lib/session'

type Props = {
  children: React.ReactNode
}

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default async function Layout({children}: Props) {
  const session = await getCurrentSession()

  if (session?.user) {
    redirect(`/profile/${session.user.id}`)
  }

  return (
    <section className="mx-auto w-80">
      <Tabs
        tabs={[
          {value: 'sign-in', label: 'Sign in'},
          {value: 'sign-up', label: 'Sign up'},
        ]}
      />
      <article className="mt-2 rounded-sm bg-gray-400 bg-opacity-25 p-2">
        {children}
      </article>
    </section>
  )
}
