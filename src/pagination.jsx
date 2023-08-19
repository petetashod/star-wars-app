/** @format */

import { useEffect } from "react";
import { useState } from "react";

function Pagination({
  setUrl,
  totalCharacters,
  prevPage,
  nextPage,
  isLoading,
}) {
  const charactersPerPage = 10;
  const displayCharacterAmount = [];

  const handleNumberSelection = (e) => {
    e.preventDefault();
    setUrl(`https://swapi.dev/api/people/?page=${e.target.textContent}`);
  };

  const nextPageButton = () => {
    setUrl(nextPage);
  };

  const previousPageButton = () => {
    setUrl(prevPage);
  };

  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    displayCharacterAmount.push(i);
  }

  return (
    <>
      <nav className="navContainer">
        <ul className="pagination ">
          <li className="page-item">
            <button
              className="page-link"
              type="button"
              onClick={previousPageButton}
              disabled={isLoading}
            >
              prev
            </button>
          </li>
          {displayCharacterAmount.map((page, index) => (
            <li key={index} className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={handleNumberSelection}
                disabled={isLoading}
              >
                {page}
              </a>
            </li>
          ))}

          <li className="page-item">
            <button
              className="page-link"
              type="button"
              onClick={nextPageButton}
              disabled={isLoading}
            >
              next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
