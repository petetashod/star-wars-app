/** @format */

import react from "react";
import App from "./App";
import "./App.css";


function Search({ setTypeGetData, setUrl }) {
    const inputValue = "";
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        
        setUrl(`https://swapi.dev/api/people/?search=${handleChangeInput}`);
        setTypeGetData(handleChangeInput);
      };
    
  const handleChangeInput = (e) => {
    return e.target.value 
  };

  return (
    <>
      <div className="input-group mb-3 search-div">
        <form action="" method="GET"className="form-styling input-group mb-3">
          <input
            type="search"
            value=""
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
