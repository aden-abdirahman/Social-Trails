import React from 'react';
import { useQuery } from '@apollo/client';

import TrailList from '../components/TrailList';
import TrailForm from '../components/TrailForm';

import { QUERY_TRAILS } from '../utils/queries';

const Trails = () => {
  const { loading, data } = useQuery(QUERY_TRAILS);
  const trails = data?.trails || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <TrailForm />
        </div>

        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TrailList
              trails={trails}
              title="Recent Trails!"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Trails;
