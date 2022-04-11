import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useState } from 'react';

import ApiTrailList from '../components/ApiTrailList';
import SearchForm from '../components/SearchForm';

import { QUERY_API_TRAILS } from '../helpers/queries';


const Trails = () => {

  const [data, setData] = useState([]);


 const [trails, setTrails] = useState([]);

 useEffect(() => {
   setTrails(data?.getTrails)
  }, [data?.getTrails]) 

  // const trails =
  //   data && data.getTrails
  //     ? data.getTrails
  //     : [];


  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <SearchForm
          setData={setData}
          />
        </div>

        <div className="col-12 col-md-10 my-3">
        
            <ApiTrailList
              trails={trails} 
              title="Search Trails!"
            />
        </div>
      </div>
    </main>
  );
};

export default Trails;