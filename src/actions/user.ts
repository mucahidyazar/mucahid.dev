"use server"

import bcrypt from 'bcryptjs';

import { db } from "@/lib/db"

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