import React from "react";
import "./search-box.styles.css";

function SearchBox({placeholder, value, handleChange}) {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}

export default SearchBox;
