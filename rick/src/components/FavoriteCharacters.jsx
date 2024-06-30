import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Modal from "./Modal";
import { Character } from "./Characterlist";
function FavoriteCharacters({ HandleRemoveFavorite, favorite }) {
  console.log(favorite);
  const [open, setisOpen] = useState(false);
  return (
    <>
      <Modal open={open} onOpen={setisOpen} title={"List of Favorites"}>
        {favorite.map((item) => {
          return (
            <Character
              key={item.id}
              character={item}
              onSelectCharacter={() => {}}
              onSelectedcharacterId="1">
              <button
                onClick={() => HandleRemoveFavorite(item.id)}
                className="icon red">
                {<TrashIcon />}
              </button>
            </Character>
          );
        })}
      </Modal>
      <button onClick={() => setisOpen((prev) => !prev)} className="heart">
        {" "}
        <HeartIcon className="icon" />
        <span className="badge">{favorite.length}</span>{" "}
      </button>
    </>
  );
}

export default FavoriteCharacters;
