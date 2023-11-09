import {cookies} from 'next/headers'

import {MhrsLoginForm} from '@/components/forms/MhrsLoginForm'
import {MhrsTemplate} from '@/components/templates/MhrsTemplate'

export default function Page() {
  const cookieStore = cookies()
  const mhrsToken = cookieStore.get('mhrsToken')?.value || ''

  if (!mhrsToken) {
    return <MhrsLoginForm />
  }

  return <MhrsTemplate mhrsToken={mhrsToken} />
}
