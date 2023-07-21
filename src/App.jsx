/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Table from "./Table";
import Search from "./Search";

function App() {
  const [getData, setTypeGetData] = useState();
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        console.log(res.data);
        setTypeGetData(res.data);
      })

      .catch((err) => console.log(err)); // find the base api to call
  }, [getData]);
  console.log(getData);
  
  const [SearchInfo, setTypeSearchinfo] = useState({
    name: "",
    birth_date: "", // should be able to pass the url for each type in object
    height: "",
    mass: "",
    home_world: "",
    species: "",
  });

  return (
    <>
      <h1>Star Wars Search</h1>
      <Search />
      <Table setTypeGetData={setTypeGetData} getData={getData} />
    </>
  );
}

export default App;
