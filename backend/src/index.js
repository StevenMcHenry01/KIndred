const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: '.env' })
const createServer = require('./createServer')
const db = require('./db')

const server = createServer()

// express middleware to allow cookies in our requests
server.express.use(cookieParser())

// express middleware that decodes JWT
// allows to get user ID on each request
server.express.use((req, res, next) => {
  const { token } = req.cookies
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET)
    // put userId inot the req for future requests to access
    req.userId = userId
  }
  next()
})

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
