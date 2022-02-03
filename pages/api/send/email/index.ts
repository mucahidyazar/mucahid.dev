import type {NextApiRequest, NextApiResponse} from 'next'
import {getSession} from 'next-auth/react'
import sgMail from '@sendgrid/mail'

import prisma from '../../../../lib/prisma'

// PUT /api/publish/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {title, content, type, to} = JSON.parse(req.body)

  const session = await getSession({req})
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  if (type === 'EMAIL') {
    const msg = {
      to: 'mucahidyazar@gmail.com', // Change to your recipient
      from: 'admin@mucahid.dev', // Change to your verified sender
      subject: title,
      text: content,
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch(error => {
        console.error(error)
      })
  } else if (session) {
    const result = await prisma.message.create({
      data: {
        title: title,
        type: type,
        content: content,
        author: {connect: {email: session?.user?.email}},
      },
    })
    res.json(result)
  } else {
    res.status(401).send({message: 'Unauthorized'})
  }
}
// id        Int     @id @default(autoincrement())
// title     String
// type      MessageType
// content   String?
// author    User?   @relation(fields: [authorId], references: [id])
// authorId  Int?
