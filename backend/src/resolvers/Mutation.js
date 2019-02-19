const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Mutations = {
  async signup(parent, args, ctx, info) {
    console.log(args)
    args.email = args.email.toLowerCase()
    // hash password and generate salt (allows for multiple of same password to have different hashes)
    const password = await bcrypt.hash(args.password, 10)
    // create user in the database
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          // spread args (same as email: arg.email etc.)
          ...args,
          // overwrite with hashed password
          password,
          // default permission to USER
          permissions: { set: ['USER'] },
        },
      },
      info
    )
    // create JWT webtoken to auto singin after account creation
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)
    // set jwt as a cookie on the response (allows for cookie to come along for the ride when changing pages)
    ctx.response.cookie('token', token, {
      // wont allow javascript to access cookie
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    })
    // return user to browser
    return user
  },
  async signin(parent, args, ctx, info) {
    const { email, password } = args
    // 1. check if there is a user with that email
    const user = await ctx.db.query.user({ where: { email } })
    if (!user) {
      throw new Error(`No such user found for email: ${email}`)
    }
    // 2. check if their password is correct
    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error(`Invalid Password!`)
    }
    // 3. generate jwt token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)
    // 4. set the cookie with the token
    ctx.response.cookie('token', token, {
      // wont allow javascript to access cookie
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    })
    // 5. return user
    return user
  },
  signout(parent, args, ctx, info) {
    ctx.response.clearCookie('token')
    return { message: 'Goodbye!' }
  },
}

module.exports = Mutations
