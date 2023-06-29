import React, {useState, useEffect} from "react";
import AddAlbum from "./AddAlbum";
import UpdateAlbum from "./UpdateAlbum";
import DeleteAlbum from "./DeleteAlbum";
import "../styles/AlbumsList.css";

function AlbumsList() {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
      fetchAlbums();
    }, []);

    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const data = await response.json();

        setAlbums(data);
      } catch (error) {
        console.error("error", error);
      }
    };

    const addAlbum = (newAlbum) => {
      setAlbums((prevAlbums) => [newAlbum, ...prevAlbums]);
    };

    const updateAlbum = (albumId, newTitle) => {
      const updatedAlbums = albums.map((album) => {
        if (albumId === album.id) {
          return { ...album, title: newTitle };
        }

        return album;
      });

      setAlbums(updatedAlbums);
    };

    const deleteAlbum = (albumId) => {
      const updatedAlbums = albums.filter((album) => albumId !== album.id);
      setAlbums(updatedAlbums);
    };
    
    return (
      <div>
        <AddAlbum onAddAlbum={addAlbum} />

        <div className="album-cards">
          {albums.map((album) => (
            <div className="cards" key={album.id}>
              <h3>{album.title}</h3>
              <h4>Album ID: {album.id}</h4>

              <div className="card-buttons">
                <UpdateAlbum
                  albumID={album.id}
                  currentTitle={album.title}
                  onUpdate={updateAlbum}
                />
                <DeleteAlbum albumId={album.id} onDelete={deleteAlbum} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default AlbumsList;