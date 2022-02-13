import type {NextApiRequest, NextApiResponse} from 'next'

import prisma from '../../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const messages = await prisma.message.findMany()
    const giveaways = 0 // await prisma.giveaway.findMany()
    const coffee = 0 // await prisma.giveaway.findMany()
    res.status(200).json({
      totalMessages: messages.length,
      totalGiveaways: giveaways,
      totalCoffee: coffee,
    })
  } catch (error) {
    res.status(500).json({error})
  }
}
