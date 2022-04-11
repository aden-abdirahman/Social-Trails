// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';



// // create form
// // run fetchCoords on submit
// // save coords to a piece of state
// // have use effect observe when coords change
// // use Lazy Query to get 
// //   const { loading, data } = useQuery(QUERY_API_TRAILS);
// //   const trails = data?.getTrails || [];
// // supply appropriate variables to the query(lat, long piece of state)


// function fetchCoords(search) {
//     var apiUrl = `${weatherApiRootUrl}/geo/1.0/direct?q=${search}&limit=5&appid=${weatherApiKey}`;
//     fetch(apiUrl)
//       .then(function (res) {
//         return res.json();
//       })
//       .then(function (data) {
//         if (!data[0]) {
//           alert('Location not found');
//         } else {
//           appendToHistory(search);
//           fetchWeather(data[0]);
//         }
//       })
//       .catch(function (err) {
//         console.error(err);
//       });
//   }

