import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import TabNav from "./components/TabNav";
import axios from "axios";


export default function App() {

  const charApi = "https://rickandmortyapi.com/api/character/";
  const [ character, setCharacter ] = useState([]);

  useEffect(() => {

    axios.get(charApi)
      .then(res => {
        setCharacter(res.data.results)
      })
      .catch(err => {
        return err
      })
  }, []);

  return (
    <main>
      <Header />
      <TabNav />
    </main>
  );
}
