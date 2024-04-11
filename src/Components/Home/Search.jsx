import React from 'react';
import './search.css'
const Search = ({ handleSearchQuery }) => {
    return (
        <form className='search-form'> 
            <input 
                type="search"
                placeholder="Search books by author name or title..."
                onChange={handleSearchQuery}
                className='search-input'
            />
        </form>
    );
};

export default Search;
