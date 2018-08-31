const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      return ctx.db.query.users({}, info);
    },
    userExists: (parent, args, ctx, info) => {
      const userExists = ctx.db.query.user(
        {
          where: {
            facebookId: args.facebookId,
          },
        },
        info
      );
      return userExists !== null;
    },
    // drafts(parent, args, ctx, info) {
    //   return ctx.db.query.posts({ where: { isPublished: false } }, info)
    // },
    // post(parent, { id }, ctx, info) {
    //   return ctx.db.query.post({ where: { id } }, info)
    // },
  },
  Mutation: {
    createUser(parent, { name }, ctx, info) {
      return ctx.db.mutation.createUser(
        {
          data: {
            name,
          },
        },
        info
      );
    },
    deleteUser(parent, { id }, ctx, info) {
      return ctx.db.mutation.deleteUser({ where: { id } }, info);
    },
    // createChallengeGroup(parent, {title, secret, users }, ctx, info){
    //   return ctx.db.mutation.createChallengeGroup(
    //     {
    //       data: {
    //         title,
    //         secret,
    //         users: { connect: users.map(user => {id: user.id}) }
    //       }
    //     },
    //     info,
    //   )
    // }
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql', // the auto-generated GraphQL schema of the Prisma API
      endpoint: 'https://time-challenge.herokuapp.com', // the endpoint of the Prisma API
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      // secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    }),
  }),
});

server.start(() => console.log('Server is running on http://localhost:4000'));
