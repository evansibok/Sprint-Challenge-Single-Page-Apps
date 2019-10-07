import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import TabNav from "./components/TabNav";
import axios from "axios";
import CharacterList from './components/CharacterList';


export default function App() {

  const charApi = "https://rickandmortyapi.com/api/character/";

  const [character, setCharacter] = useState([]);
  const [ searchValue, setSearchValue ] = useState("");

  useEffect(() => {

    axios.get(charApi)
      .then(res => {
        // debugger
        setCharacter(res.data.results);
      })
      .catch(err => {
        // debugger
        return err
      })
  }, []);

  const handleChange = e => {
    setSearchValue(e.target.value);
  }

  const filteredCharacters = character.filter(char => char.name.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <main>
      <Header />
      <TabNav handleChange={handleChange} />
      <Route exact path="/characters" 
      render={
        props => <CharacterList {...props} character={filteredCharacters} />
      } 
      />
    </main>
  );
}
