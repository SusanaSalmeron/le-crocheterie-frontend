import React, { FC } from 'react';
import styles from './searchBar.module.css';

interface SearchBarProps { }

const SearchBar: FC<SearchBarProps> = () => {
  return (
    <div className={styles.search} data-testid="SearchBar">
      <input type='text' name='search' placeholder='Search' />
      <button>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  )
}

export default SearchBar;
