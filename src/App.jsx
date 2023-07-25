/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Table from "./Table";
import Search from "./Search";

function App() {
  const [getData, setTypeGetData] = useState([]);
  const [url, setUrl] = useState("https://swapi.dev/api/people/");
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setTypeGetData(res.data.results);
      })

      .catch((err) => console.log(err)); 
  }, [url]);
 
 

  return (
    <>
      <h1>Star Wars Search</h1>
      <Search setUrl={setUrl} setTypeGetData={setTypeGetData}/>
      <Table setTypeGetData={setTypeGetData} 
      getData={getData} />
    </>
  );
}

export default App;
