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
  console.log('test')
  console.log(req.query)
  // get query Post Id
  const {postId} = req.query

  console.log({y: postId})
  const result = await prisma.comment.findMany({
    where: {postId},
    include: {author: true},
  })
  res.json(result)
}
