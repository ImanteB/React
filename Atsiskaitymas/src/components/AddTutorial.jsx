import { useState } from 'react';
import axios from 'axios';

const AddTutorial = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTutorial = () => {
    axios.post('http://localhost:3000/tutorials', { title, description, published: false })
      .then(response => console.log('Tutorial added successfully', response.data))
      .catch(error => console.error('Error adding tutorial', error));
  };

  return (
    <div>
      <h2>Add Tutorial</h2>
      <form>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="button" onClick={handleAddTutorial}>Add Tutorial</button>
      </form>
    </div>
  );
}

export default AddTutorial;