import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"

import { authOptions } from "@/lib/auth"

import { db } from "./db"

export async function getCurrentSession() {
  const session = await getServerSession(authOptions)

  return session
}

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

  if (!session?.user) redirect("/")

  const user = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
  })

  if (!user) redirect("/en")

  return user
}
