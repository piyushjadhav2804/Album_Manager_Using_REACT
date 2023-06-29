import React from "react";
import '../styles/InputBox.css'

const InputBox = ({placeholder, value, onChange}) => {

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