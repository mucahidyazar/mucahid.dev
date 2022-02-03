import type {NextApiRequest, NextApiResponse} from 'next'
import {getSession} from 'next-auth/react'

import prisma from '../../../lib/prisma'

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(req.body)
  const {comment, postId} = req.body
  console.log({comment, postId})
  const session = await getSession({req})
  if (session) {
    const result = await prisma.comment.create({
      data: {
        message: comment,
        postId,
        author: {connect: {email: session?.user?.email}},
      },
    })
    res.json(result)
  } else {
    res.status(401).send({message: 'Unauthorized'})
  }
}
