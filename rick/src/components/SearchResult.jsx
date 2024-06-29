import React from "react";
import Search from "./Search";

function SearchResult({ numOfCharacters }) {
  return (
    <div>
      Number Of Characters <span className=" heart ">{numOfCharacters}</span>
    </div>
  );
}

export default SearchResult;
