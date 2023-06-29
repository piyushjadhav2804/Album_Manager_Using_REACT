import React from "react";
import '../styles/Buttons.css';

function UpdateAlbum({albumID, currentTitle, onUpdate}) {

    const handleUpdateClick = () => {
        const newTitle = prompt("Enter updated album title", currentTitle);

        if(newTitle) {
            onUpdate(albumID, newTitle);
        }
    };

    return (
      <div>
        <button onClick={handleUpdateClick} className="update-button">
          UPDATE
        </button>
      </div>
    );
}

export default UpdateAlbum;