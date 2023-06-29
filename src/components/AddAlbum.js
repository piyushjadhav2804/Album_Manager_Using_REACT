import React, { useState } from "react";
import '../styles/AddAlbum.css';
import InputBox from "./InputBox";

const AddAlbum = ({ onAddAlbum }) => {
  const [newAlbumTitle, setNewAlbumTitle] = useState("");

  const handleTitleChange = (event) => {
    setNewAlbumTitle(event.target.value);
  };

  const addAlbum = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: newAlbumTitle,
            userId: 1, // You can change the userId as needed
          }),
        }
      );

      const data = await response.json();
      onAddAlbum(data); // Pass the new album back to the parent component
      setNewAlbumTitle(""); // Reset the input field
    } catch (error) {
      console.error("Error adding album:", error);
    }
  };

  return (
    <div className="add-album-container">
      <h2 className="heading">Add Album</h2>
      <InputBox
        placeholder="Enter album title"
        value={newAlbumTitle}
        onChange={handleTitleChange}
      />
      <button onClick={addAlbum} className="add-album-button">
        Add
      </button>
    </div>
  );
};

export default AddAlbum;
