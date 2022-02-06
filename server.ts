const app = require('express')()
const server = require('http').createServer(app)
const next = require('next')
const {getSession} = require('next-auth/react')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({dev})
const nextHandler = nextApp.getRequestHandler()

const {Server} = require('socket.io')
const io = new Server(server)

var PORT = process.env.PORT || 3000

// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: process.env.NODE_ENV !== 'production' ? 99999999 : 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
//   standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//   legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// })

nextApp.prepare().then(() => {
  // Apply the rate limiting middleware to all requests
  // app.use(limiter)

  // app.get('/api/socket', (req, res) => {
  //   return nextHandler(req, res)
  // })

  app.all('*', (req, res) => {
    return nextHandler(req, res)
  })

  server?.listen(PORT, err => {
    if (err) {
      console.log('Something went wrong')
      console.log(err)
    }
    // require("./socket")(server);
    console.log(`Ready on port http://localhost:${PORT}`)
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
})
