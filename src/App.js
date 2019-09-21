import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import TabNav from "./components/TabNav";
import axios from "axios";
import CharacterList from './components/CharacterList';


export default function App() {

  const fakeData = "https://rickandmortyapi.com/api/character/";

  // const charApi = "http://rickandmortyapi.com/api/character/";
  const [ character, setCharacter ] = useState([]);

  useEffect(() => {

    axios.get(fakeData)
      .then(res => {
        setCharacter(res.data.results);
      })
      .catch(err => {
        return err
      })
  }, []);

  return (
    <main>
      <Header />
      <TabNav />
      <CharacterList 
        character={character}
      />
    </main>
  );
}
