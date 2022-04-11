import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useLazyQuery } from '@apollo/client';


import { QUERY_API_TRAILS, QUERY_ME } from '../../helpers/queries';



const SearchForm = ({setData}) => {
    const [search, setSearch] = useState('');   // state for search input

    const [coords, setCoords] = useState({lat: 0, lon: 0});   // state for coords 

    const [loadTrails, { loading, data }] = useLazyQuery(QUERY_API_TRAILS, {
      variables: coords
    });


// lazy query to get trails

    useEffect(() => {
      async function fetchData () {
        console.log(coords)
        const {data} = await loadTrails({variables: coords}) 
        console.log(data)
        setData(data);
      }

            fetchData();
        
    }, [coords.lat, coords.lon]);

    const weatherApiRootUrl = 'https://api.openweathermap.org';

    const weatherApiKey = 'd91f911bcf2c0f925fb6535547a5ddc9';

    async function fetchCoords(search) {
        var apiUrl = `${weatherApiRootUrl}/geo/1.0/direct?q=${search}&limit=5&appid=${weatherApiKey}`;
        fetch(apiUrl)
          .then(function (res) {
            return res.json();
          })
          .then(function (data) {
            if (!data[0]) {
              alert('Location not found');
            } else {
             setCoords({lat: data[0].lat, lon: data[0].lon});
            }
          })
          .catch(function (err) {
            console.error(err);
          });
      }



  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
        const  data  = await fetchCoords(search);
        console.log(data);
    } catch (err) {
      console.error(err);
    }
  };


  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'search') {
      setSearch(value);
    }
  };

  return (
      <div className='m-auto'>
           <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
               <div className="col-12 col-lg-9">
              <textarea
                name="search"
                placeholder="Search for trails..."
                value={search}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>
            <button className="btn btn-primary btn-block py-3" type="submit">
                Search
              </button>
          </form>
      </div>
  )

}

export default SearchForm;



