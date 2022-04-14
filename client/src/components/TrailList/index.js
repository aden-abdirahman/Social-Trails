import React from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_TRAIL } from '../../utils/mutations';


const TrailList = ({ trails, title }) => {

  const [removeTrail, {error, reset} ] = useMutation(REMOVE_TRAIL);


 
  const handleTrailDelete = async (event, id) => {
    // event.preventDefault();
    // console.log(id);
    try {
      const { data } = await removeTrail({
        variables: {
          trailId: id,
        },
      });
      document.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  if (!trails.length) {
    return <h3>No Trails Yet</h3>;
  }

  return (
    <div className='trail-page'>
      <h3 className="trail-title">{title}</h3>
      <div className="trail-list">
        {trails &&
          trails.map((trail) => (
            <div key={trail._id} className="">
              <div className="card trail-item">
                <h4 className="card-header trail-item-head">
                  {trail.trailAuthor}
                </h4>
                <p>{trail.trailText}</p>
                <p>{trail.location}<span>{trail.createdAt}</span></p>
                <button type='submit' onClick={(event) => handleTrailDelete(event, trail._id)}>Delete</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrailList;
