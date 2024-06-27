import React from "react";
import { HiOutlineUser } from "react-icons/hi2";
function Characterlist({ characters }) {
  console.log(characters);
  return (
    <div className=".characters-list">
      {characters.map((character, index) => {
        console.log(character);
        return (
          <div>
            <Character key={character.id} character={character} />
          </div>
        );
      })}
    </div>
  );
}

export default Characterlist;
const Character = ({ character }) => {
  console.log(character);
  return (
    <div className="list__item">
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
      <button  className="icon red" >
        {"👁 "}
      </button>
    </div>
  );
};
