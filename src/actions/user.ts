"use server"

import { MhrsAccount, User } from '@prisma/client';
import bcrypt from 'bcryptjs';

import { db } from "@/lib/db"

import { creatorMiddleware } from './utils';

type SignUpUser = {
  email: string
  password: string
}
export async function signUpUser(body: SignUpUser) {

  try {
    const dbUser = await db.user.findUnique({ where: { email: body.email } });
    if (dbUser) return { message: 'User already exists.' };

    await db.user.create({
      data: {
        email: body.email,
        password: await bcrypt.hash(body.password, 10),
      },
    });
    return { message: 'User created successfully.' };
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
}

type UpdateUser = Pick<User, 'email' | 'name'>;
type UpdateMhrsAccount = Pick<MhrsAccount, 'id' | 'password'>
type UpdateUserBody = {
  user: UpdateUser
  mhrsAccount: UpdateMhrsAccount
}
export async function updateUser(body: UpdateUserBody) {
  const user = await creatorMiddleware()

  try {
    if (body.mhrsAccount) {
      const mhrsAccount = await db.mhrsAccount.findUnique({
        where: { userId: user.id },
      });
      if (!mhrsAccount) {
        await db.mhrsAccount.create({
          data: {
            id: body.mhrsAccount.id,
            password: body.mhrsAccount.password,
            user: { connect: { id: user.id } },
          },
        });
      } else {
        await db.mhrsAccount.update({
          where: { userId: user.id },
          data: {
            id: body.mhrsAccount.id,
            password: body.mhrsAccount.password
          },
        });
      }
    }

    if (body.user) {
      await db.user.create({
        data: {
          name: body.user.name,
          email: body.user.email,
        },
      });
    }

    return { message: 'User updated successfully.' };
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
}