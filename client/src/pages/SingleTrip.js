import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_TRIP } from '../utils/queries';

const SingleTrip = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { tripId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_TRIP, {
    // pass URL parameter
    variables: { tripId: tripId },
  });

  const trip = data?.trip || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="card">
      <h3 className="card-header">
        {trip.tripAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          Planned this trip on {trip.createdAt}
        </span>
      </h3>
      <div className="">
        <blockquote
          className=""
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {trip.trailText}
        </blockquote>
      </div>

      <div className="">
        <CommentList comments={trip.comments} />
      </div>
      <div className="" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm tripId={trip._id} />
      </div>
    </div>
  );
};

export default SingleTrip;
