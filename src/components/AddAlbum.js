// import necessary dependencies
import React, { useState } from "react";
import "../styles/AddAlbum.css";
import InputBox from "./InputBox";

// functional component receiving the "onAddAlbum" prop, that adds new album.
const AddAlbum = ({ onAddAlbum }) => {
  // state variables
  const [newAlbumTitle, setNewAlbumTitle] = useState("");

  const handleTitleChange = (event) => {
    setNewAlbumTitle(event.target.value);
  };


  // async function to ass album in existing list
  const addAlbum = async () => {

    try {
      // asynchronous HTTP POST request to the API endpoint for adding albums
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

      // Pass the new album back to the parent component
      onAddAlbum(data);

      // Reset the input field
      setNewAlbumTitle("");
    } catch (error) {
      console.error("Error adding album:", error);
    }
  };

  // renders the JSX elements of the AddAlbum component
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
