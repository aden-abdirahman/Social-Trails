const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
    _id: ID
    username: String
    email: String
    password: String
    location: String
    trips: [Trip]
    trails: [Trail]
  }

  type Trip {
    _id: ID
    tripText: String
    tripAuthor: String
    location: String
    createdAt: String
    comments: [Comment]
  }

  type Trail {
    _id: ID
    trailText: String
    trailAuthor: String
    location: String
    createdAt: String
    comments: [Comment]
  }

  type ApiTrail {
    id: Int
    name: String
    url: String
    length: Float
    description: String
    directions: String
    city: String
    region: String
    country: String
    lat: Float
    lon: Float
    difficulty: String
    features: String
    rating: Float
    thumbnail: String
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
    trips(username: String): [Trip]
    trip(tripId: ID!): Trip
    getTrails: [ApiTrail]
    getTrail(id: Int!): ApiTrail
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTrail(trailText: String!): Trail
    addTrip(tripText: String!): Trip
    addComment(trailId: ID, tripId: ID, commentText: String!): Trail
    removeTrail(trailId: ID!): Trail
    removeTrip(tripId: ID!): Trip
    removeComment(trailId: ID!, commentId: ID!): Trail
  }

`;

module.exports = typeDefs;