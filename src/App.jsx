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

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setCharactersList(res.data.results);
      })

      .catch((err) => console.log(err));
  }, [url]);

  return (
    <>
      <h1>Star Wars Search</h1>
      <Search url={url} setTypeGetData={setCharactersList} setUrl={setUrl} />
      <Table setCharactersList={setCharactersList} charactersList={charactersList} />
      <Pagination setUrl={setUrl} setCharactersList={setCharactersList} />
    </>
  );
}

export default App;
