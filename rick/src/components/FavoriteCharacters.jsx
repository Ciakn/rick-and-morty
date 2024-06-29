import { HeartIcon } from '@heroicons/react/24/outline';
import React from 'react'

function FavoriteCharacters() {
  return (
    <button className="heart">
      {" "}
      <HeartIcon className="icon" />
      <span className="badge">4</span>{" "}
    </button>
  );
}

export default FavoriteCharacters