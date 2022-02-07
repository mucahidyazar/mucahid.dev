import type {NextApiRequest, NextApiResponse} from 'next'
import {getSession} from 'next-auth/react'
import sgMail from '@sendgrid/mail'

import prisma from '../../../../lib/prisma'

// PUT /api/publish/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {title, content, type, to = 'mucahidyazar@gmail.com'} = req.body

  const session: any = await getSession({req})
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

  if (type === 'EMAIL') {
    const msg = {
      to, // Change to your recipient
      from: 'admin@mucahid.dev', // Change to your verified sender
      subject: title,
      text: content,
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
      .send(msg)
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('Email sent')
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error)
      })

    const result = await prisma.message.create({
      data: {
        title: title,
        type: type,
        content: content,
        author: {connect: {email: session?.user?.email}},
      },
    })
    res.json(result)
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
