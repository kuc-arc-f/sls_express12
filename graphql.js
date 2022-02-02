
const { ApolloServer, gql } = require('apollo-server-lambda');
const Scheme = require('./src/scheme');
const LibTask = require('./src/lib/LibTask');

const typeDefs =  Scheme.getTypeDefs();
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    //tasks
    tasks: async () => {
      return await LibTask.getItems();
    },     
  },
  Mutation: {
    /* tasks */
    addTask: async (parent, args, context) => {
      const ret = await LibTask.addTask(args)
      return ret
    },
  },  
};
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  /*
  playground: {
    endpoint: "/dev/graphql"
  }
  */
});

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
});
