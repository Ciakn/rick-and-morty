import { HeartIcon } from "@heroicons/react/24/outline";
import React from "react";

function FavoriteCharacters({ numOffavorite }) {
  return (
    <button className="heart">
      {" "}
      <HeartIcon className="icon" />
      <span className="badge">{numOffavorite}</span>{" "}
    </button>
  );
}

export default FavoriteCharacters;
