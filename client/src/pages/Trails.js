import React from 'react';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import TrailList from '../components/TrailList';
import TrailForm from '../components/TrailForm';

import { QUERY_TRAILS } from '../helpers/queries';

const Trails = () => {
  const { loading, data } = useQuery(QUERY_TRAILS);
  const trails = data?.trails || [];

  return (
    <main>
      <div className="">
        <div
          className=""
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <TrailForm />
        </div>

        <div className="">
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
