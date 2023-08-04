/** @format */

import App from "./App";
import { useState } from "react";

function Pagination({ setUrl,setCharactersList }) {
  const [pageNumber, setPageNumber] = useState(1);

  const handleNumberSelection = (e) => {
    e.preventDefault();
    setPageNumber(e.target.textContent);
    pageNumberSelection();
  };

  function pageNumberSelection(){
    setUrl(`https://swapi.dev/api/people/?page=${pageNumber}`);
   
    
  }

  // write down the steps to get the arrows to navigate the  page 
  
  return (
    <>
      <nav className="navContainer">
        <ul className="pagination ">
          <li className="page-item">
            <a className="page-link"href="#" value="1" onClick={handleNumberSelection}>
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link"href="#" value="2" onClick={handleNumberSelection}>
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link"href="#" onClick={handleNumberSelection}>
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link"href="#" onClick={handleNumberSelection}>
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link"href="#" onClick={handleNumberSelection}>
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link"href="#" onClick={handleNumberSelection}>
              6
            </a>
          </li>
          <li className="page-item">
            <a className="page-link"href="#" onClick={handleNumberSelection}>
              7
            </a>
          </li>
          <li className="page-item">
            <a className="page-link"href="#" onClick={handleNumberSelection}>
              8
            </a>
          </li>
          <li className="page-item">
            <a className="page-link"href="#" onClick={handleNumberSelection}>
              9
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
