import '../styles/App.css';
import Header from './Header.js';
import React, { useEffect, useState } from 'react';

function App() {

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      const data = await response.json();

      setAlbums(data);
    }

    catch(error) {
      console.error('error', error);
    }
  }

  return (
    <div className="App">
      <Header />

      <div className="album-cards">
        {albums.map((album) => (
          <div className='cards'>
            <h3>{album.title}</h3>
            <h4>Album ID: {album.id}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
