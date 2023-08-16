/** @format */

import { useEffect } from "react";
import { useState } from "react";

function Pagination({ setUrl, totalCharacters }) {
  const [pageNumber, setPageNumber] = useState(1);
  const charactersPerPage = 10;
  const displayCharacterAmount = [];

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
      setPageNumber(parseInt(pageNumber) + 1);
    }
  };

  const previousPageButton = (e) => {
    e.preventDefault();
    if (pageNumber <= 9) {
      setPageNumber(parseInt(pageNumber) - 1);
    }
  };

  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    displayCharacterAmount.push(i);
  }

  return (
    <>
      <nav className="navContainer">
        <ul className="pagination ">
          <li className="page-item">
            <a className="page-link" href="#" onClick={previousPageButton}>
              prev
            </a>
          </li>
          {displayCharacterAmount.map((page, index) => (
            <li key={index} className="page-item">
              <a className="page-link" href="#" onClick={handleNumberSelection}>
                {page}
              </a>
            </li>
          ))}

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
