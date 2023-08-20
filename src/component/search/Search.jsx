// import { useState } from 'react';
import './Search.css';
const Search = ({ searchQuery, setSearchQuery }) => {
  const handleInput = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        name="search"
        placeholder="Enter country"
        value={searchQuery}
        onChange={handleInput}
      />
    </div>
  );
};

export default Search;
