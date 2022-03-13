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
    const boardMessages = allMessages.filter(
      message => message.type === ContactType.BOARD,
    )
    const messages = allMessages.filter(
      message => message.type === ContactType.MESSAGE,
    )
    const totalGiveaways = Math.round(
      (boardMessages.length + messages.length) / 10,
    )
    const totalCoffee = boardMessages.length * 2 + messages.length

    res.status(200).json({
      totalMessages: allMessages.length,
      totalGiveaways,
      totalCoffee,
    })
  } catch (error) {
    res.status(500).json({error})
  }
}
