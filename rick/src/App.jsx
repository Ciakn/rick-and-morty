import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import CharacterDetails from "./components/CharacterDetails";
import Characterlist from "./components/Characterlist";
import Loader from "./components/Loader";
function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      console.log(res);
      setCharacters(data.results.slice(0, 5));
      setIsLoading(false);
    }
    fetchData();
  }, []);
  return (
    <div>
      <Navbar numOfCharacters={characters.length} />
      <main className="main">
        {isLoading ? <Loader /> : <Characterlist characters={characters} />}
        <CharacterDetails />
      </main>
    </div>
  );
}

export default App;
