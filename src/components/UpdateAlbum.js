// import necessary dependencies
import React from "react";
import "../styles/Buttons.css";


// functional component that updates the album with new title by giving a prompt
function UpdateAlbum({ albumID, currentTitle, onUpdate }) {
  const handleUpdateClick = () => {
    const newTitle = prompt("Enter updated album title", currentTitle);

    if (newTitle) {
      onUpdate(albumID, newTitle);
    }
  };

  // renders the JSX elements of the UpdateAlbum component
  return (
    <div>
      <button onClick={handleUpdateClick} className="update-button">
        UPDATE
      </button>
    </div>
  );
}

export default UpdateAlbum;
