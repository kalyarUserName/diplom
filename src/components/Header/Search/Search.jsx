import React from 'react';
import s from './Search.module.css';
const Search = () => {
    return (
        <form>
            <input type="search" name="search"
                   placeholder="Search"
                   aria-label="Search"
                   aria-required="false"
                   className={s.search}
            />
        </form>
    );
};

export default Search;