/** @format */

import {useEffect, useState}from "react";
import "./App.css";


function Search({ setTypeGetData, setUrl, url}) {
    const [search, setSearch] = useState('');
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setTypeGetData(search);
      };
    
  const handleChangeInput = (e) => {
    
    setSearch(e.target.value)
  };

  useEffect(() => {
    setUrl(`https://swapi.dev/api/people/?search=${search}`)
  },[search])
  return (
    <>
      <div className="input-group mb-3 search-div">
        <form action="" method="GET"className="form-styling input-group mb-3">
          <input
            type="search"
            className=" form-control input-styling"
            onChange={handleChangeInput}
          ></input>
          <button
            type="search"
            className="btn  btn-styling  btn-outline-secondary"
            onClick={handleSearchSubmit}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default Search;
