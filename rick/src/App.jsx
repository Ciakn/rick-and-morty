import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import CharacterDetails from "./components/CharacterDetails";
import Characterlist from "./components/Characterlist";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
import FavoriteCharacters from "./components/FavoriteCharacters";
function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [favorite, setFavorite] = useState([]);
  const onSelectCharacter = (id) => {
    setSelectedId((prev) => (prev == id ? null : id));
  };
  const addFavoriteHandler = (char) => {
    setFavorite((prevFav) => [...prevFav, char]);
  };
  const isAddedFavorite = favorite.map((fav) => fav.id).includes(selectedId);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${query}`,
          { signal: signal }
        );
        setCharacters(data.results.slice(0, 6));
      } catch (error) {
        if (!axios.isCancel()) {
          setCharacters([]);
          toast.error(err.response.data.error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
    return () => {
      controller.abort();
    };
  }, [query]);
  return (
    <div>
      <Toaster />
      <Navbar numOfCharacters={characters.length}>
        <Search query={query} setQeury={setQuery} />
        <SearchResult numOfCharacters={characters.length} />
        <FavoriteCharacters
          favorite={favorite}
          numOffavorite={favorite.length}
          setFavorite={setFavorite}
        />
      </Navbar>

      <main className="main">
        {
          <Characterlist
            characters={characters}
            isLoading={isLoading}
            onSelectCharacter={onSelectCharacter}
            selectedCharacterId={selectedId}
          />
        }
        <CharacterDetails
          isAddedFavorite={isAddedFavorite}
          selectedCharacterId={selectedId}
          onAddFavorite={addFavoriteHandler}
        />
      </main>
    </div>
  );
}

export default App;
