import React, { useEffect, useState } from "react";
import { FaCircleArrowDown } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "./Loader";
function CharacterDetails({ selectedCharacterId }) {
  const [character, setCharacters] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [episodes, setEpisode] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${selectedCharacterId}`
        );
        setCharacters(data);

        const episodeId = data.episode.map((e) => e.split("/").at(-1));
        const { data: episodeData } = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodeId}`
        );

        setEpisode([episodeData].flat().slice(0, 7));
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setLoading(false);
      }
    }

    if (selectedCharacterId) {
      fetchData();
    }
  }, [selectedCharacterId]);
  if (!selectedCharacterId || !character) {
    return (
      <div
        style={{
          color: "white",
          fontWeight: "bold",
          width: "100%",
          justifyContent: "center",
          display: "flex",
        }}>
        Select a Character for detail
      </div>
    );
  }
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
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
            <button onClick={()=> ""} className="btn btn--primary">Add to favorite</button>
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
          {episodes.length ? (
            episodes.map((item, index) => {
              return (
                <li key={item.id}>
                  <div>
                    {String(index + 1).padStart(2, "0")} - {item.episode}:{""}
                    <h4>{item.name}</h4>
                  </div>
                  <div className="badge badge--secondary">{item.air_date}</div>
                </li>
              );
            })
          ) : (
            <div>There is no Episodes available</div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetails;
