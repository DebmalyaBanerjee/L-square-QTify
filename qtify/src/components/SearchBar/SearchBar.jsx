import React from 'react';
import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search a album of your choice"
        className={styles.searchInput}
      />
      <FaSearch className={styles["search-icon"]} />
    </div>
  );
};

export default SearchBar;
