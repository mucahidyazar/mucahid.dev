import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"

import { authOptions } from "@/lib/auth"

import { db } from "./db"

export async function getCurrentSession() {
  const session = await getServerSession(authOptions)

  return session
}

type GetCurrentUserArgs = {
  isRedirect?: boolean
}
export async function getCurrentUser(args?: GetCurrentUserArgs) {
  const session = await getServerSession(authOptions)

  if (!session?.user && args?.isRedirect !== false) redirect("/")

  if (session?.user) {
    const user = await db.user.findUnique({
      where: {
        id: session?.user.id,
      },
    })

    if (!user || args?.isRedirect === true) redirect("/")

    return user
  }

  return null
}
