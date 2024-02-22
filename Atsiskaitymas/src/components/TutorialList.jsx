import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TutorialsList = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/tutorials')
      .then(response => setTutorials(response.data))
      .catch(error => console.error('Error fetching tutorials', error));
  }, []);

  return (
    <div>
      <h2>Tutorials List</h2>
      <ul>
        {tutorials.map(tutorial => (
          <li key={tutorial.id}>
            <Link to={`/tutorials/${tutorial.id}`}>{tutorial.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TutorialsList;
