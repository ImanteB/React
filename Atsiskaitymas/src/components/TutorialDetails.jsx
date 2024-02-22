import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TutorialDetails = () => {
  const { id } = useParams();
  const [tutorial, setTutorial] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/tutorials/${id}`)
      .then(response => setTutorial(response.data))
      .catch(error => console.error('Error fetching tutorial details', error));
  }, [id]);

  if (!tutorial) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{tutorial.title}</h2>
      <p>{tutorial.description}</p>
      <p>Published: {tutorial.published ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default TutorialDetails;
