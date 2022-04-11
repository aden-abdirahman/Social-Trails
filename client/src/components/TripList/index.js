import React from 'react';
import { Link } from 'react-router-dom';

const TripList = ({
  trips,
  title,
  showTitle = true,
  showUsername = true,
}) => {
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
                    had this trip on {trip.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this trip on {trip.createdAt}
                  </span>
                </>
              )}
            </h4>
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

