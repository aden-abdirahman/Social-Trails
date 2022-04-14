import React from 'react';

const ApiTrailList = ({ trails, title }) => {
  if (!trails?.length) {
    return <h3>Can't find a trail</h3>;
  }

  return (
    <div className='trail-page'>
      <h3 className="">{title}</h3>
      <div className="trail-list">
        {trails &&
          trails.map((trail) => (
            <div key={trail.id} className="card trail-item">
              <div className="">
                <h4 className=" card-header trail-item-head text-dark">
                  {trail.name}
                </h4>
                <div className="">
                  <div className='img-container'>
                <img className="api-img" src={trail.thumbnail} alt={trail.name} />
                  </div>
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
