import { NextResponse } from 'next/server';
import { Server } from 'socket.io'
import { Socket } from 'socket.io-client';

export async function POST(request: Request, res: any) {
  if (res.socket?.server.io) {
    console.log('Server already running')
    return NextResponse.next()
  }

  const io = new Server(res.socket.server, {
    path: '/api/mhrs/socket',
    addTrailingSlash: false
  })
  res.socket.server.io = io

  const onConnection = (socket: Socket) => {
    console.log('Socket connected')
    socket.on('disconnect', () => {
      console.log('Socket disconnected')
    })
  }

  io.on('connection', onConnection as any)

  console.log('Socket.io server started successfully!')
  return NextResponse.next()
}
