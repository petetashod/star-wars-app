/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Table from "./Table";
import Search from "./Search";
import Pagination from "./pagination";

function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [url, setUrl] = useState("https://swapi.dev/api/people/");
  const [isLoading, setIsLoading] = useState(false);
  const [totalCharacters, setTotalCharacters] = useState(0)
  useEffect(() => {
    let starWarsInformation = async () => {
      setIsLoading(true);
      let response = await axios.get(url);
      let charactersArray = response.data.results;
      let numberOfCharacters = response.data.count;

      for (let characters of charactersArray) {
        const planetsInformation = await axios.get(characters.homeworld);
        characters.homeworld = planetsInformation.data.name;
        if (characters.species.length == 0) {
          characters.species = "Human";
        } else {
          let speciesInformation = await axios.get(characters.species);
          characters.species = speciesInformation.data.name;
        }

        setCharactersList(charactersArray);
        setIsLoading(false);
        setTotalCharacters(numberOfCharacters);
      }
    };

    starWarsInformation();
  }, [url]);

  const loadingPage = () => {
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
  };

  return (
    <>
      <h1>Star Wars Search</h1>
      <Search url={url} setTypeGetData={setCharactersList} setUrl={setUrl} />
      <Table
        setCharactersList={setCharactersList}
        charactersList={charactersList}
      />
      <div>{loadingPage()}</div>
      <Pagination setUrl={setUrl} setCharactersList={setCharactersList} 
      totalCharacters={totalCharacters} />
    </>
  );
}

export default App;
