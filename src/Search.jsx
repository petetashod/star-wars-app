import react from 'react';
import App from './App';
import './App.css';

function Search(){
    return (
        <>
            <div className='input-group mb-3 search-div'>
                <form method="get" className='form-styling input-group mb-3'>
                    <input type="search"className=' form-control input-styling'></input>
                    <button type="button"className='btn  btn-styling  btn-outline-secondary'>Search</button>
                </form>
            </div>
        </>
    )


}
    
export default Search