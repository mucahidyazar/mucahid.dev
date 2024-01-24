'use server'

import { Appointment } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { db } from "../lib/db"

import { creatorMiddleware } from "./utils"

type CreateAppointmentBody = Pick<Appointment, 'cityId' | 'districtId' | 'polyclinicId' | 'localHospitals' | 'firstExamination' | 'sex'>
async function createAppointment(body: CreateAppointmentBody) {
  const user = await creatorMiddleware()

  const mhrsAccount = await db.mhrsAccount.findUnique({ where: { userId: user.id } })

  if (!mhrsAccount) return { message: 'mhrs account not found.' };

  await db.appointment.create({
    data: {
      ...body,
      user: { connect: { id: user.id } },
      mhrsAccount: { connect: { id: mhrsAccount.id } },
    }
  })

  await revalidatePath('/dashboard/mhrs');
  await redirect(`/dashboard/mhrs`);
}

type UpdateAppointmentBody = Partial<Pick<Appointment, 'cityId' | 'districtId' | 'polyclinicId' | 'localHospitals' | 'firstExamination' | 'sex' | 'status'>> & { id: string }
async function updateAppointment(body: UpdateAppointmentBody) {
  const user = await creatorMiddleware()
  const { status, id, ...rest } = body

  const response = await db.appointment.findUnique({ where: { id } })
  if (!response) return { message: 'appointment not found.' };

  if (user.role !== "ADMIN" && response.userId !== user.id) return { message: 'user not authorized.' };


  await db.appointment.update({
    where: { id: response.id },
    data: {
      ...rest,
      status
    }
  })

  await revalidatePath('/dashboard/mhrs');
  await redirect(`/dashboard/mhrs`);
}

type ActionRemoveAppointment = { id: string }
async function removeAppointment(passedData: ActionRemoveAppointment) {
  const { id } = passedData;
  const appointment = await db.appointment.findUnique({ where: { id } });
  if (!appointment) return { message: 'appointment not found.' };

  const user = await creatorMiddleware()
  if (user.role !== "ADMIN" && appointment.userId !== user.id) return { message: 'user not authorized.' };

  await db.appointment.delete({ where: { id } })
  await revalidatePath('/dashboard/stock');
  await redirect(`/dashboard/stock`);
}

export {
  createAppointment,
  removeAppointment,
  updateAppointment
}
