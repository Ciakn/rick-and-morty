import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import CharacterDetails from "./components/CharacterDetails";
import Characterlist from "./components/Characterlist";
import { Toaster } from "react-hot-toast";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
import FavoriteCharacters from "./components/FavoriteCharacters";
import useCharacter from "./hooks/useCharacters";
import useLocalStorage from "./hooks/useLocalStorage";
function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
 
  const { characters, isLoading } = useCharacter(
    "https://rickandmortyapi.com/api/character?name",
    query
  );
  const [favorite , setFavorite] = useLocalStorage("FAVORITES" , [])
  const onSelectCharacter = (id) => {
    setSelectedId((prev) => (prev == id ? null : id));
  };
  const addFavoriteHandler = (char) => {
    setFavorite((prevFav) => [...prevFav, char]);
  };
  const HandleRemoveFavorite = (id) => {
    setFavorite((prevFav) => prevFav.filter((fav) => fav.id !== id));
  };
  const isAddedFavorite = favorite.map((fav) => fav.id).includes(selectedId);


  return (
    <div>
      <Toaster />
      <Navbar numOfCharacters={characters.length}>
        <Search query={query} setQeury={setQuery} />
        <SearchResult numOfCharacters={characters.length} />
        <FavoriteCharacters
          favorite={favorite}
          numOffavorite={favorite.length}
          HandleRemoveFavorite={HandleRemoveFavorite}
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
