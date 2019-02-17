const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Mutations = {
  async signup(parent, args, ctx, info) {
    console.log(args)
    args.email = args.email.toLowerCase()
    // hash password
    const password = await bcrypt.hash(args.password, 10)
    // create user in the database
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          //spread args
          ...args,
          password,
          permissions: { set: 'USER' },
          disorders: { set: args.disorders },
        },
      },
      info
    )
    // create JWT webtoken to auto singin after account creation
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)
    // set jwt as a cookie on the response
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    })
    // return user to browser
    return user
  },
}

module.exports = Mutations
