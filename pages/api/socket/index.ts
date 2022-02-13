import {Server} from 'http'

import type {NextApiRequest} from 'next'
import {getSession} from 'next-auth/react'
import {Server as IO} from 'socket.io'

export default function handler(req: NextApiRequest, res: any) {
  // if (!res.socket.server.io) {
  console.log('Starting Socket.IO server')

  const httpServer = res.socket.server as unknown as Server
  const io = new IO(httpServer, {
    path: '/api/socket',
  })

  // Run when client connnects
  io.on('connection', async socket => {
    const session = await getSession({req: socket.request})

    if (session?.user) {
      io.emit('USER_CONNECTED', {user: session.user})
    }

    socket.on('disconnect', () => {
      console.log('user disconnected')

      if (session?.user) {
        io.emit('USER_DISCONNECTED', {user: session.user})
      }
    })
  })

  //   res.socket.server.io = io
  // }
  // res.end()
}
