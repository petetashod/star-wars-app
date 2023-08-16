/** @format */

import {useState}from "react";
import "./App.css";


function Search({ setTypeGetData, setUrl, url, isLoading}) {
    
    const [search, setSearch] = useState('');
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setUrl(`https://swapi.dev/api/people/?search=${search}`)
        setTypeGetData(search);
      };
    
  const handleChangeInput = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  };
 
  
  return (
    <>
      <div className="input-group mb-3 search-div">
        <form action="" method="GET"className="form-styling input-group mb-3">
          <input
            type="search"
            className=" form-control input-styling"
            onChange={handleChangeInput} disabled={isLoading}
          ></input>
          <button
            type="search"
            className="btn  btn-styling  btn-outline-secondary"
            onClick={handleSearchSubmit} disabled={isLoading}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default Search;
