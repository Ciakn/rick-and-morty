import React from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Loader from "./Loader";
function Characterlist({ characters, isLoading, onSelectCharacter }) {
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div className=".characters-list">
      {characters.map((character, index) => {
        return (
          <div key={character.id}>
            <Character
              onSelectCharacter={onSelectCharacter}
              character={character}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Characterlist;
const Character = ({ character, onSelectCharacter }) => {
  return (
    <div
      key={character.id}
      className="list__item"
      onClick={() => onSelectCharacter(character.id)}>
      <img src={character.image} alt={character.name} />
      <h3 className="name">
        <span> {character.gender === "Male" ? "👨" : "👩"}</span>
        <span>{character.name}</span>
      </h3>
      <div className="list-item__info info">
        <span className={`status ${character.status === "Dead" ? "red" : ""}`}>
          {" "}
        </span>
        <span> {character.status} </span>
        <span>-{character.species}</span>
      </div>
      <button className="icon red">{<EyeIcon />}</button>
    </div>
  );
};
