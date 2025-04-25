import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://friendly-meme-g4w6p9gvx9j395g6-8000.app.github.dev/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Activities</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity.id}>
              <td>{activity.id}</td>
              <td>{activity.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Activities;