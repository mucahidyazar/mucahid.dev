import {User} from '@prisma/client'
import Image from 'next/image'

import ProfileForm from '@/components/forms/ProfileForm'
import {db} from '@/lib/db'
import {getCurrentUser} from '@/lib/session'

export default async function Page() {
  const user = (await getCurrentUser()) as User
  const mhrsAccount = await db.mhrsAccount.findUnique({
    where: {userId: user.id},
  })

  return (
    <div className="mx-auto w-80">
      <Image
        src={user.image || 'https://via.placeholder.com/150'}
        alt="logo"
        width={120}
        height={120}
        className="mb-4 w-full rounded object-cover"
      />
      <ProfileForm
        defaultValues={{
          name: user.name || '',
          email: user.email || '',
          mhrsId: mhrsAccount?.id || '',
          mhrsPassword: mhrsAccount?.password || '',
        }}
      />
    </div>
  )
}
