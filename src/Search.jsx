import react from 'react';
import App from './App';
import './App.css';

function Search({searchInfo, setTypeSearchInfo,setUrl}){
    const handleChangeInput =(e) => {
        e.target.value
        setTypeSearchInfo(handleChangeInput);

    }
    const handleSearchSubmit =(e) => {
        setUrl(`https://swapi.dev/api/people/?search=${e.target.value}`)
    }
    return (
        <>
            <div className='input-group mb-3 search-div'>
                <form get="Method"className='form-styling input-group mb-3'>
                    <input type="search"className=' form-control input-styling'
                    onChange={handleChangeInput}></input>
                    <button type="search"className='btn  btn-styling  btn-outline-secondary'
                    onClick={handleSearchSubmit}>Search</button>
                </form>
            </div>
        </>
    )


}
    
export default Search