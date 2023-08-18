/** @format */

import {useState}from "react";
import "./App.css";


function Search({ setCharactersList, setUrl, url, isLoading, charactersList}) {
    const [search, setSearch] = useState('');
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setUrl(`https://swapi.dev/api/people/?search=${search}`)
        setCharactersList(search);
      };
    
  const handleChangeInput = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  };

  function disabledSearch () {
  if (isLoading === false) {
    return !isLoading 
  } else if (isLoading === true) {
    return isLoading
  }
}
  
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
             onClick={handleSearchSubmit} disabled={disabledSearch()} 
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default Search;
