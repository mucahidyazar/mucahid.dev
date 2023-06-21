'use client'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import {useEffect, useRef, useState} from 'react'
import {io, Socket} from 'socket.io-client'

import {Button} from '../atoms/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../atoms/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../atoms/table'
import {MhrsSearchForm} from '../forms/MhrsSearchForm'
import {UserCard} from '../molecules/UserCard'

// let socket: any

interface MhrsTemplateProps {
  mhrsToken: string
}
export function MhrsTemplate({mhrsToken}: MhrsTemplateProps) {
  const [doctors, setDoctors] = useState(mockDoctors || [])
  const socketRef = useRef<Socket | null>(null)

  const clearAuth = (value: boolean) => {
    if (value === false) return

    Cookies.remove('mhrsToken')
    window.location.reload()
  }
  const {data: meData} = useQuery({
    queryKey: ['me'],
    queryFn: () =>
      axios.get('/api/mhrs/me', {
        headers: {
          Authorization: `Bearer ${mhrsToken}`,
        },
      }),
    select: data => data.data,
    onError: clearAuth,
  })
  const firstName = meData?.data.adi
  const lastName = meData?.data.soyadi
  const age = meData?.data.yas
  const userId = meData?.data.uuid

  useEffect(() => {
    if (socketRef.current) {
      if (userId && mhrsToken) {
        socketRef.current.emit('initialize', {mhrsToken, userId})

        socketRef.current.on('initializeSuccess', () => {
          console.log('initializeSuccess')
        })
        socketRef.current.on('doctors', (doctors: any) => {
          setDoctors(doctors)
        })
        socketRef.current.on('authError', clearAuth)
      }

      return () => {
        socketRef.current?.off('initializeSuccess')
        socketRef.current?.off('authError')
      }
    }
  }, [userId, mhrsToken, socketRef])

  useEffect(() => {
    socketRef.current = io('http://localhost:8001', {
      transports: ['websocket'],
      path: '/api/v1/socket',
    })
    socketRef.current?.connect()

    return () => {
      socketRef.current?.disconnect()
    }
  }, [])

  const emitSelectDoctorHandler = (
    doctorId: number,
    organisationId: number,
  ) => {
    socketRef.current?.emit('selectDoctor', {doctorId, organisationId})
  }

  console.log({doctors})
  return (
    <div className="flex gap-4">
      <div className="flex flex-col">
        <UserCard firstName={firstName} lastName={lastName} age={age} />
        <MhrsSearchForm mhrsToken={mhrsToken} userId={userId} />
      </div>
      <ul className="border border-solid border-indigo-500 border-opacity-30 w-full rounded-md h-60 bg-indigo-500 bg-opacity-10 overflow-y-auto p-1 flex flex-col gap-1">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader className="bg-black">
            <TableRow className="border-none">
              <TableHead className="min-w-[80px]"></TableHead>
              <TableHead className="min-w-[200px]">Doctor</TableHead>
              <TableHead className="min-w-[400px] text-right">
                Contact
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {doctors.map(doctor => (
              <Dialog key={doctor.hekim.id}>
                <TableRow className="border-none hover:bg-indigo-700 hover:bg-opacity-40">
                  <TableCell className="font-medium">
                    <DialogTrigger>
                      <Button variant="link">Randevu</Button>
                    </DialogTrigger>
                  </TableCell>
                  <TableCell>
                    <p className="font-semibold">{`${doctor.hekim.ad} ${doctor.hekim.soyad}`}</p>

                    <div className="text-xs">
                      <p>Hekim ID: {doctor.hekim.mhrsHekimId}</p>
                      <p>{doctor.baslangicZamaniStr.tarih}</p>
                      <p>
                        {doctor.baslangicZamaniStr.gun} -{' '}
                        {doctor.baslangicZamaniStr.saat}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="text-right text-xs">
                    <p>{doctor.kurum.kurumAdi}</p>
                    <p>{doctor.kurumBilgileri.adres}</p>
                    <a
                      href={`tel:+90${doctor.kurumBilgileri.telefonNumarasi}`}
                      className="block underline text-indigo-300"
                    >
                      +90{doctor.kurumBilgileri.telefonNumarasi}
                    </a>
                    <a
                      href={`mailto:${doctor.kurumBilgileri.eposta}`}
                      className="block underline text-indigo-300"
                    >
                      {doctor.kurumBilgileri.eposta}
                    </a>
                  </TableCell>
                </TableRow>
                <DialogContent className="bg-white bg-opacity-50 text-black text-center">
                  <DialogHeader>
                    <DialogTitle className="!text-sm text-center">
                      Are you sure you want to take this appointment?
                    </DialogTitle>
                    {/* <DialogDescription>
                      This action cannot be undone. Are you sure you want to
                      permanently delete this file from our servers?
                    </DialogDescription> */}
                  </DialogHeader>
                  <DialogFooter className="flex !justify-center">
                    <DialogTrigger>
                      <Button variant="ghost">Cancel</Button>
                    </DialogTrigger>
                    <DialogTrigger>
                      <Button
                        type="submit"
                        onClick={() =>
                          emitSelectDoctorHandler(
                            doctor.hekim.mhrsHekimId,
                            doctor.kurum.mhrsKurumId,
                          )
                        }
                      >
                        Confirm
                      </Button>
                    </DialogTrigger>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ))}
          </TableBody>
        </Table>
      </ul>
    </div>
  )
}

const mockDoctors = [
  {
    hekim: {
      id: '0d87d220-8174-4b5e-aa07-132f9d3e8104',
      mhrsHekimId: 120291,
      ad: 'ARZU',
      soyad: 'ÖZKAN',
      cinsiyet: [Object],
    },
    muayeneYeri: {id: 7357776, adi: 'GENEL DİŞ 1 (İlk Muayene İçindir)'},
    kurum: {
      mhrsKurumId: 619836,
      mhrsAnaKurumId: 0,
      kurumAdi: 'İSTANBUL- (ANADOLU)- PENDİK AĞIZ VE DİŞ SAĞLIĞI HASTANESİ',
      kurumKisaAdi: 'PENDİK AĞIZ VE DİŞ SAĞLIĞI HASTANESİ',
      kurumTurId: 25,
      ilIlce: [Object],
    },
    kurumBilgileri: {
      mhrsKurumId: 619836,
      halkDilindekiAdi: 'PENDİK ADSH\nPENDİK DİŞ HASTANESİ',
      telefonNumarasi: 2163967131,
      eposta: 'pendik.adsh@saglik.gov.tr',
      adres:
        'ÇAMÇEŞME MAHALLESİ ELÇİ SOKAK NO:13 PENDİK-KAYNARCA\n' +
        '\n' +
        'TUZLA  AĞIZ VE DİŞ SAĞLIĞI POLİKLİNİĞİ ADRES:\n' +
        'ŞİFA MAHALLESİ  HANZADE SOKAK NO:1  TUZLA/ İSTANBUL',
      enlem: 40.87227883898719,
      boylam: 29.268531373139126,
      mhrsIlId: 342,
      mhrsIlceId: 1835,
      ilAdi: 'İSTANBUL(ANADOLU)',
      ilceAdi: 'PENDİK',
      kurumAdi: 'İSTANBUL- (ANADOLU)- PENDİK AĞIZ VE DİŞ SAĞLIĞI HASTANESİ',
      mesafe: null,
      mesafeKm: null,
      kurumTurId: 25,
      anaKurumAdi: null,
      anaKurumKisaAdi: null,
      acilHizmetler: [Array],
    },
    klinik: {
      mhrsKlinikId: 198,
      mhrsKlinikAdi: 'Diş Hekimliği (Genel Diş)',
      kisaAdi: "Diş Hekimliği'ne",
      lcetvelTipi: 1,
      yandalList: [],
      anadalList: [Array],
    },
    cetvelTipi: {valText: 'Hekim', val: 1},
    aksiyon: {id: 200, aksiyonAdi: 'Muayene'},
    hekimOncelikSirasi: false,
    bosKapasite: 5,
    bos: true,
    ekVar: false,
    baslangicZamani: '2023-05-29T09:15:00',
    bitisZamani: '2023-05-29T09:30:00',
    favori: false,
    randevuEnGecGun: null,
    bitisZamaniStr: {
      date: '2023-05-29 09:30:00',
      tarih: '29.05.2023',
      gun: 'Pazartesi',
      saat: '09:30',
      zaman: '29.05.2023 09:30',
      tarihAy: '29 Mayıs 2023',
    },
    baslangicZamaniStr: {
      date: '2023-05-29 09:15:00',
      tarih: '29.05.2023',
      gun: 'Pazartesi',
      saat: '09:15',
      zaman: '29.05.2023 09:15',
      tarihAy: '29 Mayıs 2023',
    },
  },
  {
    hekim: {
      id: '36d48747-2e1f-4f53-8698-b8cac8d96598',
      mhrsHekimId: 75256,
      ad: 'VASFİYE',
      soyad: 'KIYMAZ',
      cinsiyet: [Object],
    },
    muayeneYeri: {id: 7357776, adi: 'GENEL DİŞ 1 (İlk Muayene İçindir)'},
    kurum: {
      mhrsKurumId: 619836,
      mhrsAnaKurumId: 0,
      kurumAdi: 'İSTANBUL- (ANADOLU)- PENDİK AĞIZ VE DİŞ SAĞLIĞI HASTANESİ',
      kurumKisaAdi: 'PENDİK AĞIZ VE DİŞ SAĞLIĞI HASTANESİ',
      kurumTurId: 25,
      ilIlce: [Object],
    },
    kurumBilgileri: {
      mhrsKurumId: 619836,
      halkDilindekiAdi: 'PENDİK ADSH\nPENDİK DİŞ HASTANESİ',
      telefonNumarasi: 2163967131,
      eposta: 'pendik.adsh@saglik.gov.tr',
      adres:
        'ÇAMÇEŞME MAHALLESİ ELÇİ SOKAK NO:13 PENDİK-KAYNARCA\n' +
        '\n' +
        'TUZLA  AĞIZ VE DİŞ SAĞLIĞI POLİKLİNİĞİ ADRES:\n' +
        'ŞİFA MAHALLESİ  HANZADE SOKAK NO:1  TUZLA/ İSTANBUL',
      enlem: 40.87227883898719,
      boylam: 29.268531373139126,
      mhrsIlId: 342,
      mhrsIlceId: 1835,
      ilAdi: 'İSTANBUL(ANADOLU)',
      ilceAdi: 'PENDİK',
      kurumAdi: 'İSTANBUL- (ANADOLU)- PENDİK AĞIZ VE DİŞ SAĞLIĞI HASTANESİ',
      mesafe: null,
      mesafeKm: null,
      kurumTurId: 25,
      anaKurumAdi: null,
      anaKurumKisaAdi: null,
      acilHizmetler: [Array],
    },
    klinik: {
      mhrsKlinikId: 198,
      mhrsKlinikAdi: 'Diş Hekimliği (Genel Diş)',
      kisaAdi: "Diş Hekimliği'ne",
      lcetvelTipi: 1,
      yandalList: [],
      anadalList: [Array],
    },
    cetvelTipi: {valText: 'Hekim', val: 1},
    aksiyon: {id: 200, aksiyonAdi: 'Muayene'},
    hekimOncelikSirasi: false,
    bosKapasite: 3,
    bos: true,
    ekVar: false,
    baslangicZamani: '2023-05-29T08:30:00',
    bitisZamani: '2023-05-29T08:45:00',
    favori: false,
    randevuEnGecGun: null,
    bitisZamaniStr: {
      date: '2023-05-29 08:45:00',
      tarih: '29.05.2023',
      gun: 'Pazartesi',
      saat: '08:45',
      zaman: '29.05.2023 08:45',
      tarihAy: '29 Mayıs 2023',
    },
    baslangicZamaniStr: {
      date: '2023-05-29 08:30:00',
      tarih: '29.05.2023',
      gun: 'Pazartesi',
      saat: '08:30',
      zaman: '29.05.2023 08:30',
      tarihAy: '29 Mayıs 2023',
    },
  },
]
