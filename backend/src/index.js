const cookieParser = require('cookie-parser')
require('dotenv').config({ path: '.env' })
const createServer = require('./createServer')
const db = require('./db')

const server = createServer()

server.express.use(cookieParser())

// Starts up Express GraphQL server!
server.start(
  {
    // block just anybody from hitting endpoint (just our website)
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  details => {
    console.log(`Server is now running on port http://localhost:${details.port}`)
  }
)
