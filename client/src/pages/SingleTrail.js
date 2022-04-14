import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_TRAIL } from '../utils/queries';

const SingleTrail = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { trailId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_TRAIL, {
    // pass URL parameter
    variables: { trailId: trailId },
  });

  const trail = data?.trail || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      <h3 className="">
        {trail.trailAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          Hiked this trail on {trail.createdAt}
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
          {trail.trailText}
        </blockquote>
      </div>

      <div className="">
        <CommentList comments={trail.comments} />
      </div>
      <div className="" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm trailId={trail._id} />
      </div>
    </div>
  );
};

export default SingleTrail;
