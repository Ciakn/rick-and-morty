import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import CharacterDetails from "./components/CharacterDetails";
import Characterlist from "./components/Characterlist";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const onSelectCharacter = (id) => {
    setSelectedId(id);
  };
  console.log(selectedId);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${query}`
        );

        setCharacters(data.results.slice(0, 6));
      } catch (error) {
        setCharacters([]);
        toast.error(error.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [query]);
  return (
    <div>
      <Toaster />
      <Navbar numOfCharacters={characters.length}>
        <Search query={query} setQeury={setQuery} />
        <SearchResult numOfCharacters={characters.length} />
      </Navbar>

      <main className="main">
        {
          <Characterlist
            characters={characters}
            isLoading={isLoading}
            onSelectCharacter={onSelectCharacter}
          />
        }
        <CharacterDetails />
      </main>
    </div>
  );
}

export default App;
