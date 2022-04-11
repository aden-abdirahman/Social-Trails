import React from 'react';
import { Link } from 'react-router-dom';
import { REMOVE_TRIP } from '../../helpers/mutations';
import { useMutation } from '@apollo/client';

const TripList = ({
  trips,
  title,
  showTitle = true,
  showUsername = true,
}) => {

  const [removeTrip, {error, reset} ] = useMutation(REMOVE_TRIP);


 
  const handleTripDelete = async (event, id) => {
    // event.preventDefault();
    // console.log(id);
    try {
      const { data } = await removeTrip({
        variables: {
          tripId: id,
        },
      });
      document.location.reload();
    } catch (err) {
      console.error(err);
    }
  };


  if (!trips.length) {
    return <h3>No Trips Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {trips &&
        trips.map((trip) => (
          <div key={trip._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${trip.tripAuthor}`}
                >
                  {trip.tripAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                     Went on this trip on {trip.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    Went on this trip on {trip.createdAt}
                  </span>
                </>
              )}
            </h4>
            <button type='submit' onClick={(event) => handleTripDelete(event, trip._id)}>Delete</button>
            <div className="card-body bg-light p-2">
              <p>{trip.tripText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/trips/${trip._id}`}
            >
              Share your trip...
            </Link>
          </div>
        ))}
    </div>
  );
};

export default TripList;

