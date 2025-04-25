import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://friendly-meme-g4w6p9j395g6-8000.app.github.dev/api/workouts')
      .then(response => response.json())
      .then(data => setWorkouts(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Workouts</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map(workout => (
            <tr key={workout.id}>
              <td>{workout.id}</td>
              <td>{workout.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Workouts;