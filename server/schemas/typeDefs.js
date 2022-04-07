const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
    _id: ID
    username: String
    email: String
    password: String
    location: String
    trips: [Trip]!
    trails: [Trails]!
  }

  type Trip {
    _id: ID
    tripText: String
    tripAuthor: String
    location: String
    createdAt: String
    comments: [Comments]!
  }

  type Trails {
    _id: ID
    trailText: String
    trailAuthor: String
    location: String
    createdAt: String
    comments: [Comments]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    trails(username: String): [Trail]
    trail(trailId: ID!): Trail
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTrail(trailText: String!): Trail
    addTrip(tripText: String!): Trip
    addComment(trailId: ID, tripId: ID, commentText: String!): Trail
    removeTrail(trailId: ID!): Trail
    removeTrip(travelId: ID!): Trip
    removeComment(trailId: ID!, commentId: ID!): Trail
  }

`;

module.exports = typeDefs;