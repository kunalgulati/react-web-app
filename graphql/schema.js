const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date

  type Mutation {
    createUser(input: UserInput): User
  }

  type User {
    id: Int!
    name: String!
    email: String!
    password: String!
    createdAt: Date
    updatedAt: Date
  }

  input UserInput {
    id: ID
    name: String!
    password: String!
    email: String!
  }

  type Query {
    hello: String
    getUsers: [User]
  }

`;

module.exports = typeDefs;