const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User{
    name: String
    email: String
    password: String
    matches: [ID]
    _id: ID

  }



  type Auth {
    token: ID!
    user: User!
  }

  type Query {
 
    user(userId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
    users: [User]!
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

   
    removeUser: User
    
  }
`;

module.exports = typeDefs;
