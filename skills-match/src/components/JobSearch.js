// src/components/JobSearch.js
import React, { useState } from 'react';

function JobSearch({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for jobs..."
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default JobSearch;
