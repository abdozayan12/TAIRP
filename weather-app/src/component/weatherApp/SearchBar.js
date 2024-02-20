import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../assets/search.png';

const SearchBar = ({ onSearch }) => (
  <div className="top-section">
    <input type="text" placeholder="Search for places" className="CityInput" />
    <div
      className="search-icon"
      role="button"
      tabIndex={0}
      onClick={onSearch}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onSearch();
        }
      }}
    >
      <img src={searchIcon} alt="searchIcon" />
    </div>
  </div>
);
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
