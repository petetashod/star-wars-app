import { useState } from 'react'
// import axios from 'axios';
import './App.css';
import Table from './Table'
import Search from './Search'

function App() {
  const [charcterInfo, setTypeCharacterinfo] = useState({
    name:"",
    birth_date: "", // should be able to pass the url for each type in object
    height: "",
    mass: "",
    home_world:"",
    species: ""

  })

  return (
    <>
      <div>
        <h1>Star Wars Search</h1>
        <Search/>
        <Table/>
      </div>
     
    </>
  )
}

export default App
