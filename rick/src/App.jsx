import React from "react";
import Navbar from "./components/Navbar";
import "./App.css"
import CharacterDetails from "./components/CharacterDetails";
import Characterlist from "./components/Characterlist";
import {character, allCharacters} from "../data/data"
function App() {
  return (
    <div>
      <Navbar />
      <main className="main">
        <Characterlist characters={ allCharacters} />
        <CharacterDetails />
      </main>
    </div>
  );
}

export default App;
