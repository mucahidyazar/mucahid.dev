import type {NextApiRequest, NextApiResponse} from 'next'
import {getSession} from 'next-auth/react'

import {Role} from '@/constants'

import prisma from '../../../lib/prisma'

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {title, content, location = '', image = ''} = req.body

  const session = await getSession({req})
  if (session && session.user.role === Role.ADMIN) {
    const result = await prisma.post.create({
      data: {
        title,
        content,
        location,
        image,
        author: {connect: {email: session?.user?.email}},
      },
    })
    res.json(result)
  } else {
    res.status(401).send({message: 'Unauthorized'})
  }
}
