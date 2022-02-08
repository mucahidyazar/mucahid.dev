import type {NextApiRequest, NextApiResponse} from 'next'
import {getSession} from 'next-auth/react'
import nodemailer from 'nodemailer'

import prisma from '../../../../lib/prisma'

// PUT /api/publish/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {title, content, type, to = 'mucahidyazar@gmail.com'} = req.body

  const session: any = await getSession({req})
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  } as any)

  if (type === 'EMAIL') {
    transporter
      .sendMail({
        from: 'admin@mucahid.dev',
        to,
        subject: title,
        text: content,
        html: `<h1>${title}</h1><p>${content}</p>`,
      })
      .then(info => {
        res.json({info})
      })
      .catch(error => {
        res.json({error})
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
