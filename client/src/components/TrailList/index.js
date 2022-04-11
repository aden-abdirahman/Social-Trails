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
                <button type='submit' onClick={(event) => handleTrailDelete(event, trail._id)}>Delete</button>
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
