import type {NextApiRequest, NextApiResponse} from 'next'

import prisma from '../../../lib/prisma'

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // get query Post Id
  const {postId}: any = req.query

  const result = await prisma.comment.findMany({
    where: {postId},
    include: {author: true},
  })
  res.json(result)
}
