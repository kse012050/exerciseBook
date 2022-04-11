import React ,{ useRef } from 'react';
import './searchForm.css'

const SearchForm = () => {
    let searchText = useRef();
    let searchValue ='';
    function searchClick(){
        searchValue = searchText.current.value;
        console.log(searchValue);
        searchValue = ''; 
    }

    function keyEvent(e){
        // console.log(e.key);
        if(e.key === 'Enter'){
            searchClick();
        }
    }
    
    return (
        <div className='searchArea'>
            <input type="text" ref={searchText} onKeyDown={keyEvent}/>
            <button onClick={searchClick}>
                <span className="material-icons-outlined">
                    search
                </span>
            </button>
        </div>
    );
};

export default SearchForm;