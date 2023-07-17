import { uesState } from "react";
import react from "react"
import './App.css';

function Table(){
    return(
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

                </tbody>
            </table>
        </div>

    )


}
export default Table