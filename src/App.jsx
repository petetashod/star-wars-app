/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Table from "./Table";
import Search from "./Search";
import Pagination from "./Pagination";

function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [url, setUrl] = useState("https://swapi.dev/api/people/");
  // I need to filter out the species and the planets?
  // I do not know if I have to change the url for yhe planets

  // const charactersArray = [
  //   {
  //     name: "Luke Skywalker",
  //     homeworld: "http://www.getthehomeworld.com/1",
  //     species: "",
  //   },
  //   {
  //     name: "R2D2",
  //     homeworld: "http://www.getthehomeworld.com/2",
  //     species: "Robot",
  //   },
  // ]

  // for species check to see if its an empyu array if so its a human if not add the url

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        const charactersArray = res.data.results;

        for (let character in charactersArray) {
          const homeWorldUrl = character.homeworld;

           axios.get(homeWorldUrl)
          .then((res) => {
            console.log(res.data);
            character.homeworld = res.data.name
          });

          
        }

        setCharactersList(charactersArray);
      })

      .catch((err) => console.log(err));
  }, [url]);

  return (
    <>
      <h1>Star Wars Search</h1>
      <Search url={url} setTypeGetData={setCharactersList} setUrl={setUrl} />
      <Table
        setCharactersList={setCharactersList}
        charactersList={charactersList}
      />
      <Pagination setUrl={setUrl} setCharactersList={setCharactersList} />
    </>
  );
}

export default App;
