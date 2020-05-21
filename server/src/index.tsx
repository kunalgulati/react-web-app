const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../schema.graphql');

const server = new ApolloServer({ typeDefs });

// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);