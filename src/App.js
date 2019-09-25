import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import TabNav from "./components/TabNav";
import axios from "axios";
import CharacterList from './components/CharacterList';


export default function App() {

  const charApi = "https://rickandmortyapi.com/api/character/";

  const [ character, setCharacter ] = useState([]);

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

  return (
    <main>
      <Header />
      <TabNav />
      <CharacterList 
        character={character}
      />
      <Route exact path="/characters" component={CharacterList} />      
    </main>
  );
}
