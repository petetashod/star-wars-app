/** @format */
import "./App.css";


function Table({ setTypeGetData: setCharactersList, charactersList }) {
     
  return (
    <div>
      <table className="table text-center table-hover table-dark table-styling">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Home World</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>
          {charactersList.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.birth_year}</td>
              <td>{person.height}</td>
              <td>{person.mass}</td>
              <td>{person.homeworld}</td>
              <td>{person.species}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
