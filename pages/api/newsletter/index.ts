import type {NextApiRequest, NextApiResponse} from 'next'
import {getSession} from 'next-auth/react'

import prisma from '../../../lib/prisma'

// PUT /api/publish/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const body = req.body
  const session: any = await getSession({req})

  const data = {
    name: session?.user?.name,
    email: session?.user?.email,
    newsletter: true,
  }
  if (body.name) {
    data.name = body.name
  }
  if (body.email) {
    data.email = body.email
  }

  try {
    if (session) {
      const result = await prisma.user.update({
        where: {email: session?.user?.email},
        data,
      })
      res.json(result)
    } else {
      const result = await prisma.newsLetter.create({
        data,
      })
      res.json(result)
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
