import {User} from '@prisma/client'
import {redirect} from 'next/navigation'

import {MhrsTemplate} from '@/components/templates/MhrsTemplate'
import {db} from '@/lib/db'
import {getCurrentUser} from '@/lib/session'

type PageProps = {
  searchParams: Record<string, string> & {
    appointmentId?: string
  }
}
export default async function Page({searchParams}: PageProps) {
  const user = (await getCurrentUser()) as User
  const mhrsAccount = await db.mhrsAccount.findUnique({
    where: {userId: user.id},
  })

  if (!mhrsAccount) {
    return redirect(`/profile/${user.id}`)
  }

  const appointments = await db.appointment.findMany({
    where: {userId: user.id},
  })

  const appointmentId = searchParams.appointmentId as string
  // if there is an appointmentId in the url then find the appointment

  const appointmentHistories = await db.appointmentHistory.findMany({
    where: {userId: user.id, appoinmentId: appointmentId},
    orderBy: {createdAt: 'desc'},
  })

  if (appointmentId) {
    const appointment = await db.appointment.findUnique({
      where: {id: appointmentId},
    })

    if (appointment) {
      return (
        <MhrsTemplate
          appointments={appointments}
          appointment={appointment}
          appointmentHistories={appointmentHistories}
          user={user}
        />
      )
    }
  }

  return (
    <MhrsTemplate
      appointments={appointments}
      appointmentHistories={appointmentHistories}
      user={user}
    />
  )
}
