'use client'
import {Appointment, AppointmentHistory, User} from '@prisma/client'
import {
  Archive,
  Building2Icon,
  Calculator,
  Clock,
  DnaIcon,
  MapIcon,
  PauseIcon,
  PlayIcon,
  UserPlusIcon,
} from 'lucide-react'
import {TrashIcon} from 'lucide-react'
import {useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'
import io from 'socket.io-client'

import {removeAppointment, updateAppointment} from '@/actions/appointment'
import {env} from '@/configs/env.mjs'
import {CITY, DISTRICT, POLYCLINIC} from '@/constants'
import {useServerAction} from '@/hooks'
import {cn} from '@/utils'

import {MhrsSearchForm} from '../forms/MhrsSearchForm'
import {AppointmentLogs} from '../molecules/AppointmentLogs'
import {SocketLogs} from '../molecules/SocketLogs'
import {Button} from '../ui/button'

interface MhrsTemplateProps {
  appointments: Appointment[]
  appointment?: Appointment
  appointmentHistories: AppointmentHistory[]
  user: User
}

type SocketMessage = {
  userId: string
  message: string
  type: string
  data: unknown
}
export function MhrsTemplate({
  appointments,
  appointment,
  appointmentHistories,
  user,
}: MhrsTemplateProps) {
  const [updateAppointmentAction, updateAppointmentIsPending] =
    useServerAction(updateAppointment)
  const [removeAppointmentAction, removeAppointmentIsPending] =
    useServerAction(removeAppointment)

  const router = useRouter()

  const [historyList, setHistoryList] = useState<SocketMessage[]>([])

  useEffect(() => {
    // Sunucunuzun URL'si
    // const socket = io('https://api.mucahid.dev')
    const socket = io(env.NEXT_PUBLIC_EXTARNAL_API_URL)
    socket.emit('join', user.id)

    // Fiyat güncellemelerini dinle
    socket.on('searchAppointment', (data: SocketMessage) => {
      const newHistoryList: SocketMessage[] = []
      newHistoryList.push(data)
      setHistoryList(prev => [...newHistoryList, ...prev])
    })

    // Komponent unmount edildiğinde bağlantıyı kapat
    return () => {
      socket.off('searchAppointment')
      socket.disconnect()
    }
  }, [user.id])

  const selectedAppointment = appointment

  return (
    <div className="flex gap-4">
      <div className="flex h-[40rem] w-96 flex-col">
        <MhrsSearchForm appointment={appointment} />

        <div className="col-span-1 h-full overflow-hidden overflow-y-auto rounded border border-foreground border-opacity-10 bg-foreground bg-opacity-5 text-xs">
          <h2 className="p-2 text-center text-base font-semibold">
            LOGS ({historyList.length + appointmentHistories.length})
          </h2>

          <SocketLogs logs={historyList?.slice(0, 20)} />
          <AppointmentLogs logs={appointmentHistories} />
        </div>
      </div>
      <ul className="flex h-[40rem] w-full flex-col gap-2 overflow-y-auto rounded-md border border-solid border-foreground border-opacity-10 bg-foreground bg-opacity-5 p-3">
        {/* active, archived, inactive */}
        <div className="ml-auto flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded bg-green-500"></div>
            <span>Active</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded bg-yellow-500"></div>
            <span>Inactive</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded bg-red-500"></div>
            <span>Archived</span>
          </div>
        </div>
        {/* {urlShortenerData?.data.map((data: any) => (
          <UrlShortenerListItem key={data._id} data={data} />
        ))} */}
        {appointments?.map(appointment => (
          <div
            key={appointment.id}
            onClick={() =>
              router.push(`/dashboard/mhrs?appointmentId=${appointment.id}`)
            }
            className={cn(
              'flex h-fit cursor-pointer rounded border border-foreground border-opacity-10 bg-foreground bg-opacity-50 p-2 text-foreground hover:shadow-soft-md',
              appointment.status === 'active' && 'border-b-4 border-green-500',
              appointment.status === 'inactive' &&
                'border-b-4 border-yellow-500',
              appointment.status === 'archived' && 'border-b-4 border-red-500',
              appointment.id === selectedAppointment?.id &&
                'bg-cyan-500 bg-opacity-100',
            )}
          >
            <div className="flex flex-grow flex-col justify-center gap-1 text-center text-xs text-background">
              <p className="flex items-center gap-2">
                <Building2Icon size={12} />
                <span>{POLYCLINIC[appointment.polyclinicId]}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapIcon size={12} />
                <span>
                  {DISTRICT[appointment.districtId]} /{CITY[appointment.cityId]}
                </span>
              </p>
              <div className="flex items-center gap-2 text-[10px] text-yellow-300">
                <p className="flex items-center gap-1">
                  <Calculator size={10} />
                  <span>Checked: {appointment.checkCount}</span>
                </p>
                <p>|</p>
                <p className="flex items-center gap-1">
                  <DnaIcon size={10} />
                  <span>
                    Any Doctor: {appointment.anyDoctor ? 'True' : 'False'}
                  </span>
                </p>
                <p>|</p>
                <p className="flex items-center gap-1">
                  <UserPlusIcon size={10} />
                  <span>Sex: {appointment.sex}</span>
                </p>
                <p>|</p>
                <p className="flex items-center gap-1">
                  <Clock size={10} />
                  <span>Frequency (Every): {appointment.checkFrequency}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                className="w-full text-red-500 hover:bg-red-500 hover:bg-opacity-10 hover:text-red-600"
                disabled={removeAppointmentIsPending}
                isLoading={removeAppointmentIsPending}
                onClick={() => {
                  removeAppointmentAction({id: appointment.id})
                }}
              >
                <TrashIcon size={16} />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-full text-indigo-500 hover:bg-indigo-500 hover:bg-opacity-10 hover:text-indigo-600"
                disabled={updateAppointmentIsPending}
                isLoading={updateAppointmentIsPending}
                onClick={() => {
                  updateAppointmentAction({
                    id: appointment.id,
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
                disabled={updateAppointmentIsPending}
                isLoading={updateAppointmentIsPending}
                onClick={e => {
                  e.stopPropagation()
                  updateAppointmentAction({
                    id: appointment.id,
                    status:
                      appointment.status === 'active' ? 'inactive' : 'active',
                  })
                }}
              >
                {appointment.status === 'active' ? (
                  <PauseIcon size={16} />
                ) : (
                  <PlayIcon size={16} />
                )}
              </Button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}
