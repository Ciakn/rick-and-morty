import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import CharacterDetails from "./components/CharacterDetails";
import Characterlist from "./components/Characterlist";
import toast, { Toaster } from "react-hot-toast";
function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch("https://rickandmortyapi.com/api/character");
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();

        setCharacters(data.results.slice(0, 6));
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <Toaster />
      <Navbar numOfCharacters={characters.length} />
      <main className="main">
        {<Characterlist characters={characters} isLoading={isLoading} />}
        <CharacterDetails />
      </main>
    </div>
  );
}

export default App;
