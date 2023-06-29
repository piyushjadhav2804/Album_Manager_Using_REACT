// import necessary dependencies
import React, { useState, useEffect } from "react";
import AddAlbum from "./AddAlbum";
import UpdateAlbum from "./UpdateAlbum";
import DeleteAlbum from "./DeleteAlbum";
import "../styles/AlbumsList.css";

// functional component that renders the list of albums and manages the state of the albums.
function AlbumsList() {
  // State variables
  const [albums, setAlbums] = useState([]);

  // used to fetch the albums data from the API when the component mounts.
  useEffect(() => {
    fetchAlbums();
  }, []); // The empty dependency array [] ensures that the effect runs only once when the component is mounted.

  // async function to fetch the albums data from the API
  const fetchAlbums = async () => {
    try {
      // asynchronous HTTP GET request to the API endpoint
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );

      // awaits the response and extracts the JSON data
      const data = await response.json();

      // data is set as value of state variable
      setAlbums(data);
    } catch (error) {
      console.error("error", error);
    }
  };

  // handle the addition of a new album
  const addAlbum = (newAlbum) => {
    setAlbums((prevAlbums) => [newAlbum, ...prevAlbums]);
  };

  // handle the update of an existing album
  const updateAlbum = (albumId, newTitle) => {
    // creates a new array "updatedAlbums" by mapping over the "albums" array
    const updatedAlbums = albums.map((album) => {
      if (albumId === album.id) {
        return { ...album, title: newTitle };
      }

      return album;
    });

    // updates the "albums" state with the "updatedAlbums" array.
    setAlbums(updatedAlbums);
  };

  // handle the deletion of an album
  const deleteAlbum = (albumId) => {
    // creates a new array "updatedAlbums" by filtering the "albums" array
    const updatedAlbums = albums.filter((album) => albumId !== album.id);

    // updates the "albums" state with the "updatedAlbums" array.
    setAlbums(updatedAlbums);
  };

  // Render the JSX elements
  return (
    <div>
      {/* component for adding new albums. */}
      <AddAlbum onAddAlbum={addAlbum} />
      
      {/* renders a card for each album */}
      <div className="album-cards">
        {albums.map((album) => (
          <div className="cards" key={album.id}>
            <h3>{album.title}</h3>
            <h4>Album ID: {album.id}</h4>

            <div className="card-buttons">
              
              {/* updates the album with new title */}
              <UpdateAlbum
                albumID={album.id}
                currentTitle={album.title}
                onUpdate={updateAlbum}
              />

              {/* delete particular album */}
              <DeleteAlbum albumId={album.id} onDelete={deleteAlbum} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumsList;
