import React from 'react';
import { useQuery } from '@apollo/client';

import TripList from '../components/TripList';
import TripForm from '../components/TripForm';

import { QUERY_TRIPS } from '../utils/queries';

const Trips = () => {
  const { loading, data } = useQuery(QUERY_TRIPS);
  const trips = data?.trips || [];

  return (
    <main>
      <div className="">
        <div
          className=""
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <TripForm />
        </div>

        <div className="">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TripList
              trips={trips}
              title="Recent Trips!"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Trips;
