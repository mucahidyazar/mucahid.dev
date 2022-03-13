import type {NextApiRequest, NextApiResponse} from 'next'

import {ContactType} from '@/constants'
import {TMessage} from '@/types'

import prisma from '../../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const allMessages = (await prisma.message.findMany()) as TMessage[]
    const messages = allMessages.filter(
      (message: TMessage) => message.type === ContactType.MESSAGE,
    )
    const boardMessages = allMessages.filter(
      (message: TMessage) => message.type === ContactType.BOARD,
    )

    res.status(200).json({
      messages,
      boardMessages,
    })
  } catch (error) {
    res.status(500).json({error})
  }
}
