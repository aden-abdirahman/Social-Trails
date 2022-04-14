import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_TRAIL, REMOVE_TRAIL } from '../../utils/mutations';
import { QUERY_TRAILS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const TrailForm = () => {
  const [trailText, setTrailText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addTrail, { error }] = useMutation(ADD_TRAIL, {
    update(cache, { data: { addTrail } }) {
      try {
        const { trails } = cache.readQuery({ query: QUERY_TRAILS });

        cache.writeQuery({
          query: QUERY_TRAILS,
          data: { trails: [addTrail, ...trails] },
        });
      } catch (e) {
        console.error(e);
      }

    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addTrail({
        variables: {
          trailText,
          trailAuthor: Auth.getProfile().data.username,
        },
      });

      setTrailText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'trailText' && value.length <= 280) {
      setTrailText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className='trail-form align-items-center justify-content-center'>
      <h3>Share your next Trail!</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className=""
            onSubmit={handleFormSubmit}
          >
            <div className="trail-text">
              <textarea
                name="trailText"
                placeholder="Leave a new trail..."
                value={trailText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="">
              <button className="btn btn-dark btn-block py-3 mb-2" type="submit">
                Add Trail
              </button>
            </div>
            {error && (
              <div className="">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your trail. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default TrailForm;
