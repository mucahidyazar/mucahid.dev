import type {NextApiRequest, NextApiResponse} from 'next'

import {ContactType} from '@/constants'

import prisma from '../../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const allMessages = await prisma.message.findMany()
    const messages = allMessages.filter(
      message => message.type === ContactType.MESSAGE,
    )
    const boardMessages = allMessages.filter(
      message => message.type === ContactType.BOARD,
    )

    res.status(200).json({
      messages,
      boardMessages,
    })
  } catch (error) {
    res.status(500).json({error})
  }
}
