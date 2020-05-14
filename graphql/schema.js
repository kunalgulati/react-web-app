const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date

  type Query {
    hello: String
    getUser: [User]
    getUsers: [User2]
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
  }
  type User {
    id: Int!
    name: String!
    email: String!
    password: String!
    createdAt: Date
    updatedAt: Date
  }

  type User2 {
    id: String!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
`;

module.exports = typeDefs;