import React from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <div className='SearchBar'>
            <form>
                <input type='text' size={20} />
            </form>
            <SearchIcon style={{color:"var(--color-background)",cursor:"pointer"}} />
        </div>
    )
}

export default SearchBar