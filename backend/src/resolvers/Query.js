const { forwardTo } = require('prisma-binding')

const Query = {
  // example of using already creating query in prisma
  //users: forwardTo('db'),
  async users(parent, args, ctx, info) {
    const users = await ctx.db.query.users({}, info)
    return users
  },
}

module.exports = Query
