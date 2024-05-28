import React from 'react';
import "./Search.css";

const Search = (props) => {
  return (
    <input
      type="text"
      placeholder="Search beers"
      value={props.searchedText}
      onChange={(e) => props.setSearchedText(e.target.value)}
    />
  );
};

export default Search;
