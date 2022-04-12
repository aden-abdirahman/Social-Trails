import React from 'react';
import { useQuery } from '@apollo/client';

import ApiTrailList from '../components/ApiTrailList';

import { QUERY_API_TRAILS } from '../utils/queries';

const Trails = () => {
  const { loading, data } = useQuery(QUERY_API_TRAILS);
  const trails = data?.getTrails || [];

  return (
    <main>
      {/* <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <SearchForm />
        </div> */}

        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ApiTrailList
              trails={trails}
              title="Search Trails!"
            />
          )}
        </div>
      {/* </div> */}
    </main>
  );
};

export default Trails;