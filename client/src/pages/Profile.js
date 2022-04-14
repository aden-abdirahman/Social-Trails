import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import '../styles/Home.css';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

import TrailList from '../components/TrailList';
import TrailForm from '../components/TrailForm';

import TripList from '../components/TripList';
import TripForm from '../components/TripForm';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <h4 className="profile-details">
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
    }

  return (
    <div>
      <div className="profile-details">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s`:'your'} profile.
        </h2>
        

        <div className="col-12 col-md-10 mb-5">
        <TrailForm/>
        {/* <TrailList/> */}
        </div>

        <div className="col-12 col-md-10 mb-5">
        <TripForm/>
        {/* <TripList/> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;


