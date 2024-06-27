import React from "react";
import { character, episodes } from "../../data/data";
import { FaCircleArrowDown } from "react-icons/fa6";
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
        <div className="title">
          <h2>Lists of episodes</h2>
          <button className="icon">
            {" "}
            <FaCircleArrowDown />{" "}
          </button>
        </div>
        <ul>
          {episodes.map((item, index) => {
            return (
              <li key={item.id}>
                <div>
                  {String(index + 1).padStart(2, "0")} {item.episode}:{" "}
                  <strog>{item.name}</strog>
                </div>
                <div className="badge badge--secondary">{item.air_date}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetails;
