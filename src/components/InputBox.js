// import necessary dependencies
import React from "react";
import "../styles/InputBox.css";

// functional component that provides input search box when needed
const InputBox = ({ placeholder, value, onChange }) => {

  // renders the JSX elements of the InpurBox component
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="album-input"
    ></input>
  );
};

export default InputBox;
