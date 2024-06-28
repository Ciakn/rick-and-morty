import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import CharacterDetails from "./components/CharacterDetails";
import Characterlist from "./components/Characterlist";
import { character, allCharacters } from "../data/data";
function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results.slice(0,5)));
  }, []);
  return (
    <div>
      <Navbar numOfCharacters={characters.length} />
      <main className="main">
        <Characterlist characters={characters} />
        <CharacterDetails />
      </main>
    </div>
  );
}

export default App;
