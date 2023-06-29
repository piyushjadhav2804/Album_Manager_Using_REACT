// import necessary dependencies
import React from "react";
import "../styles/Buttons.css";

// functional component receiving the "albumId" & "onDelete()" as prop, that deletes the selected album.
function DeleteAlbum({ albumId, onDelete }) {
  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this album?"));
    onDelete(albumId);
  };

  // renders the JSX elements of the DeleteAlbum component
  return (
    <div>
      <button className="delete-button" onClick={handleDeleteClick}>
        DELETE
      </button>
    </div>
  );
}

export default DeleteAlbum;
