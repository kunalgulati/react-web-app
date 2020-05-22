const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

// const newLink = {
//   subscribe: newLinkSubscribe,
//   resolve: payload => {
//     return payload
//   },
// };
// const newVote = {
//   subscribe: newVoteSubscribe,
//   resolve: payload => {
//     return payload
//   },
// };

module.exports = {
  Query: {
    postedBy: (parent, args, context) =>{
      return context.prisma.link({ id: parent.id }).postedBy()
    },
    votes: (parent, args, context) => {
      return context.prisma.link({ id: parent.id }).votes()
    },
    feed: async (parent, args, context) => {
      const count = await context.prisma
        .linksConnection({
          where: {
            OR: [
              { description_contains: args.filter },
              { url_contains: args.filter },
            ],
          },
        })
        .aggregate()
        .count()
      const links = await context.prisma.links({
        where: {
          OR: [
            { description_contains: args.filter },
            { url_contains: args.filter },
          ],
        },
        skip: args.skip,
        first: args.first,
        orderBy: args.orderBy,
      })
      return {
        count,
        links,
      }
    },
    newLinkSubscribe: (parent, args, context, info) => {
      return context.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node()
    },
    newLink: {
      subscribe: this.newLinkSubscribe,
      resolve: payload => {
        return payload
      },
    },
    newVoteSubscribe: (parent, args, context, info) =>{
      return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node()
    },
    newVote: {
      subscribe: this.newVoteSubscribe,
      resolve: payload => {
        return payload
      },
    },
    links: (parent, args, context) =>{
      return context.prisma.user({ id: parent.id }).links()
    },
    link: (parent, args, context) =>{
      return context.prisma.vote({ id: parent.id }).link()
    },
    user: (parent, args, context) => {
      return context.prisma.vote({ id: parent.id }).user()
    },
    
  
  },
  // MUTATION
  Mutation: {
    post: (parent, args, context) =>{
      return context.prisma.createLink({
        url: args.url,
        description: args.description,
      })
    },
    signup: async (parent, args, context) =>{
      const password = await bcrypt.hash(args.password, 10)
      const user = await context.prisma.createUser({ ...args, password })
    
      const token = jwt.sign({ userId: user.id }, APP_SECRET)
    
      return {
        token,
        user,
      }
    },
    login: async (parent, args, context) => {
      const user = await context.prisma.user({ email: args.email })
      if (!user) {
        throw new Error('No such user found')
      }
    
      const valid = await bcrypt.compare(args.password, user.password)
      if (!valid) {
        throw new Error('Invalid password')
      }
    
      return {
        token: jwt.sign({ userId: user.id }, APP_SECRET),
        user,
      }
    },
    vote: async(parent, args, context) => {
      const userId = getUserId(context)
      const linkExists = await context.prisma.$exists.vote({
        user: { id: userId },
        link: { id: args.linkId },
      })
      if (linkExists) {
        throw new Error(`Already voted for link: ${args.linkId}`)
      }
    
      return context.prisma.createVote({
        user: { connect: { id: userId } },
        link: { connect: { id: args.linkId } },
      })
    }
    
  },

};

// module.exports = resolvers;

