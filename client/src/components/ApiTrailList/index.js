import React from 'react';

const ApiTrailList = ({ trails, title }) => {
  if (!trails?.length) {
    return <h3>Can't find a trail</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {trails &&
          trails.map((trail) => (
            <div key={trail.id} className="col-4 col-xl-2">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {trail.name}
                </h4>
                <div className="card-body">
                <img className="w-"src={trail.thumbnail} alt={trail.name} />
                <p>{trail.city}</p>
                <p>{trail.length}</p>
                <p>{trail.description}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ApiTrailList;
