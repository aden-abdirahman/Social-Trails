import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TRAIL = gql`
  mutation addTrail($trailText: String!) {
    addTrail(trailText: $trailText) {
      _id
      trailText
      trailAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_TRIP = gql`
  mutation addTrip($tripText: String!) {
    addTrip(tripText: $tripText) {
      _id
      tripText
      tripAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      trailText
      trailAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const REMOVE_TRAIL = gql`
  mutation removeTrail($trailId: ID!) {
    removeTrail(trailId: $trailId) {
      _id
    }
  }
`;

export const REMOVE_TRIP = gql`
  mutation removeTrip($tripId: ID!) {
    removeTrip(tripId: $tripId) {
      _id
    }
  }
`;


export const REMOVE_COMMENT = gql`
  mutation removeComment($commentId: ID!) {
    removeComment(commentId: $commentId) {
      _id
    }
  }
`;





