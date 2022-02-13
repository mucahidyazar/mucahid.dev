import type {NextApiRequest, NextApiResponse} from 'next'
import {getSession} from 'next-auth/react'

import prisma from '../../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const session: any = await getSession({req})

    if (session) {
      const result = await prisma.metamask.findMany({
        where: {author: {email: session.user.email}},
      })

      res.json(result)
    }

    res.status(401).json({error: 'Not authorized'})
  } catch (error) {
    res.status(500).json({error})
  }
}
