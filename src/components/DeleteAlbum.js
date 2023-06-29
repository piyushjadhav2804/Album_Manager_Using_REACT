import React from "react";
import '../styles/Buttons.css';

function DeleteAlbum({albumId, onDelete}) {

    const handleDeleteClick = () => {

        if(window.confirm("Are you sure you want to delete this album?"));
        onDelete(albumId);
    }

    return (
      <div>
        <button className="delete-button" onClick={handleDeleteClick}>DELETE</button>
      </div>
    );
}

export default DeleteAlbum;