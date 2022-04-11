import React from 'react';

const TrailList = ({ trails, title }) => {
  if (!trails.length) {
    return <h3>No Trails Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {trails &&
          trails.map((trail) => (
            <div key={trail._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {trail.trailAuthor}
                </h4>
                <p>{trail.trailText}</p>
                <p>{trail.location}<span>{trail.createdAt}</span></p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrailList;
