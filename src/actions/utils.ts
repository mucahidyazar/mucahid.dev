'use server'
import { User } from "@prisma/client";

import { CREATOR_ROLES } from "@/constants";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";

async function creatorMiddleware(): Promise<User> {
  try {
    const user = await userMiddleware();

    if (!CREATOR_ROLES.includes(user?.role as string)) {
      throw new Error('User not authorized')
    }

    return user
  } catch (error) {
    throw error
  }
}

async function userMiddleware(): Promise<User> {
  try {
    const user = await getCurrentUser()
    if (!user) throw new Error('User not found')

    const id = user.id;
    const dbUser = await db.user.findUnique({ where: { id } });
    if (!dbUser) throw new Error('User not found')

    return dbUser
  } catch (error) {
    throw error
  }
}

export { creatorMiddleware, userMiddleware }
