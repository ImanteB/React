import { useState, useEffect } from 'react';

const Tutorials = () => {
  const [tutorials, setTutorials] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {posts.map((tutorials) => (
        <div key={tutorials.id}>
          <h3>
            <span>{tutorials.id}</span> {tutorials.title}
          </h3>
          <p>{tutorials.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Tutorials;