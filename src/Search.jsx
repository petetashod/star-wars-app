/** @format */

import react from "react";
import App from "./App";
import "./App.css";

function Search({ setTypeGetData, setUrl }) {
  const handleChangeInput = (e) => {
    return e.target.value;
  };
  const handleSearchSubmit = () => {
    setUrl(`https://swapi.dev/api/people/?search=${handleChangeInput}`);
    setTypeGetData(handleChangeInput);
  };

  return (
    <>
      <div className="input-group mb-3 search-div">
        <form method="get"className="form-styling input-group mb-3">
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
