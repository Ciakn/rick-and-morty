import React from "react";
import { character } from "../../data/data";
function CharacterDetails() {
  return (
    <div className="" style={{ flex: 1 }}>
      <div className="character-detail">
        <img
          src={character.image}
          alt={character.name}
          className="character-detail__img"
        />
        <div className="character-detail__info">
          <h3 className=" name">
            <span>{character.gender == "Male" ? "👨" : "👩"}</span>
            <span> &nbsp; {character.name}</span>
          </h3>
          <div className="info">
            <span
              className={`status ${
                character.status == "Dead" ? "red" : ""
              }`}></span>
            <span>&nbsp; -{character.species}</span>
          </div>
          <div className="location">
            <p>Last Known Location</p>
            <p>{character.location.name}</p>
          </div>
          <div className="actions">
            <button className="btn btn--primary">Add to favorite</button>
          </div>
        </div>
      </div>
          <div className="character-episodes">
              <div className=""></div>
      </div>
    </div>
  );
}

export default CharacterDetails;
