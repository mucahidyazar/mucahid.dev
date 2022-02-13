import type {NextApiRequest, NextApiResponse} from 'next'
import {getSession} from 'next-auth/react'

import prisma from '../../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const session: any = await getSession({req})
    const {walletId} = req.body

    if (session) {
      const result = await prisma.metamask.create({
        data: {
          walletId,
          author: {connect: {email: session?.user?.email}},
        },
      })

      res.json(result)
    }

    res.status(401).json({error: 'Not authorized'})
  } catch (error) {
    res.status(500).json({error})
  }
}
