import React, { useState } from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../assets/search.png';

const SearchBar = ({ onSearch }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = () => {
    const searchTerm = document.querySelector('.CityInput').value;
    if (searchTerm === '') {
      setErrorMessage('Please enter a search term');
    } else {
      onSearch();
      setErrorMessage('');
    }
  };

  return (
    <div className="top-section">
      <input type="text" placeholder="Search for places" className="CityInput" />
      <div
        className="search-icon"
        role="button"
        tabIndex={0}
        onClick={handleSearch}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      >
        <img src={searchIcon} alt="searchIcon" />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
