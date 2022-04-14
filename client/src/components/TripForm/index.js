import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_TRIP } from '../../utils/mutations';
import { QUERY_TRIPS, QUERY_ME } from '../../utils/queries';

import Auth from '../../helpers/auth';

const TripForm = () => {
  const [tripText, setTripText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addTrip, { error }] = useMutation(ADD_TRIP, {
    update(cache, { data: { addTrip } }) {
      try {
        const { trips } = cache.readQuery({ query: QUERY_TRIPS });

        cache.writeQuery({
          query: QUERY_TRIPS,
          data: { trips: [addTrip, ...trips] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addTrip({
        variables: {
          tripText,
          tripAuthor: Auth.getProfile().data.username,
        },
      });

      setTripText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'tripText' && value.length <= 280) {
      setTripText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className='trail-form align-items-center justify-content-center'>
      <h3>Share your next Trip!</h3>

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
                name="tripText"
                placeholder="Plan your next trip..."
                value={tripText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="">
              <button className="btn btn-dark btn-block py-3 mb-2" type="submit">
                Add Trip
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
          You need to be logged in to share your trip. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default TripForm;
