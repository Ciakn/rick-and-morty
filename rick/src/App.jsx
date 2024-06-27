import React from "react";
import Navbar from "./components/Navbar";
import "./App.css"
import CharacterDetails from "./components/CharacterDetails";
import Characterlist from "./components/Characterlist";
function App() {
  return (
    <div>
      <Navbar />
      <main className="main">
        <CharacterDetails />
        <Characterlist/>
      </main>
    </div>
  );
}

export default App;
