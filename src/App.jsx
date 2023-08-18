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
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [nextPage, setNextPage] = useState([]);
  const [prevPage, setPrevPage] = useState(null);
  useEffect(() => {
    let starWarsInformation = async () => {
      setIsLoading(true);
      let response = await axios.get(url);
      let charactersArray = response.data.results;
      let numberOfCharacters = response.data.count;
      let nextPageResponse = response.data.next;
      let prevPageResponse = response.data.previous;

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
        setTotalCharacters(numberOfCharacters);
        setPrevPage(prevPageResponse);
        setNextPage(nextPageResponse);
      }
      setIsLoading(false);
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
      <Search
        url={url}
        setCharactersList={setCharactersList}
        setUrl={setUrl}
        charactersList={charactersList}
      />
      <Table
        setCharactersList={setCharactersList}
        charactersList={charactersList}
      />
      <div>{loadingPage()}</div>
      <Pagination
        setUrl={setUrl}
        setCharactersList={setCharactersList}
        totalCharacters={totalCharacters}
        setTotalCharacters={setTotalCharacters}
        setPrevPage={setPrevPage}
        setNextPage={setNextPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  );
}

export default App;
