import { gql } from '@apollo/client';


export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      trails {
        _id
        trailText
        createdAt
      }
      trips {
        _id
        tripText
        createdAt
      }
    }
  }
`;

export const QUERY_TRAILS = gql`
  query getTrails {
    trails {
      _id
      trailText
      trailAuthor
      createdAt
    }
  }
`;

export const QUERY_API_TRAILS = gql`
  query getTrails {
    getTrails {
      id
      name
      length
      description
      directions
      city
      region
      country
      lat
      lon
      difficulty
      features
      rating
      thumbnail
    }
  }
`;

export const QUERY_TRIPS = gql`
  query getTrips {
    trips {
      _id
      tripText
      tripAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_TRAIL = gql`
  query getSingleTrail($trailId: ID!) {
    trail(trailId: $trailId) {
      _id
      trailText
      trailAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;
export const QUERY_SINGLE_TRIP = gql`
  query getSingleTrip($tripId: ID!) {
    trip(tripId: $tripId) {
      _id
      tripText
      tripAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      trails {
        _id
        trailText
        trailAuthor
        createdAt
      }
      trips {
        _id
        tripText
        tripAuthor
        createdAt
      }
    }
  }
`;