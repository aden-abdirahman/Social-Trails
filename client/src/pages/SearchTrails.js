import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import ApiTrailList from '../components/ApiTrailList';
import SearchForm from '../components/SearchForm';



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
    <main className="search">
      <div>
        <div
          className=""
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <SearchForm
          setData={setData}
          />
        </div>

        <div className="flex justify-content-center">
        
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