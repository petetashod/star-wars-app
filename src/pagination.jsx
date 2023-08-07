/** @format */

import { useEffect } from "react";
import { useState } from "react";

function Pagination({ setUrl }) {
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    setUrl(`https://swapi.dev/api/people/?page=${pageNumber}`);
  }, [pageNumber]);

  const handleNumberSelection = (e) => {
    e.preventDefault();
    setPageNumber(e.target.textContent);
    pageNumberSelection();
  };

  function pageNumberSelection() {
    setUrl(`https://swapi.dev/api/people/?page=${pageNumber}`);
  }

  const nextPageButton = (e) => {
    e.preventDefault();
    if (pageNumber >= 1) {
      setPageNumber(parseInt(pageNumber)+ 1);
    }
  };

  const previousPageButton = (e) => {
    e.preventDefault();
    if (pageNumber <= 9) {
      setPageNumber(parseInt(pageNumber) - 1);
    }
  };

  return (
    <>
      <nav className="navContainer">
        <ul className="pagination ">
          <li className="page-item">
            <a className="page-link" href="#" onClick={previousPageButton}>
              prev
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={handleNumberSelection}>
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={handleNumberSelection}>
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={handleNumberSelection}>
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={handleNumberSelection}>
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={handleNumberSelection}>
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={handleNumberSelection}>
              6
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={handleNumberSelection}>
              7
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={handleNumberSelection}>
              8
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={handleNumberSelection}>
              9
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={nextPageButton}>
              next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
