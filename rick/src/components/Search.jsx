import React, { useState } from "react";

function Search({ query, setQeury }) {
  return (
    <input
      type="text"
      value={query}
      onChange={e => setQeury(e.target.value)}
      className="text-field"
      placeholder="search..."
    />
  );
}

export default Search;
