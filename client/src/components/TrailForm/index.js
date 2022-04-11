import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_TRAIL } from '../../utils/mutations';
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

      // update me object's cache
      const me  = cache.readQuery({ query: QUERY_ME,
      variables: {
      trailText
      } 
    });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, trails: [...me.trails, addTrail] } },
      });
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
    <div>
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
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="trailText"
                placeholder="Leave a new trail..."
                value={trailText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Trail
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
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
