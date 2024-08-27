


import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import searchIcon from '../../../public/images/icon-search.svg'; // Import the search icon image
import './SearchBar.css';

function SearchBar({ handleInput, errorMessage }) {
  const [userName, setUserName] = useState('octocat');
  const [inputValueChanged, setInputValueChanged] = useState(false);

  function handleUserNameChange(e) {
    setUserName(e.target.value);
    setInputValueChanged(true);
  }

  function submitForm(event) {
    event.preventDefault();
    handleInput(userName);
  }

  useEffect(() => {
    handleInput(userName);
  }, []);

  useEffect(() => {
    setInputValueChanged(false);
  }, [errorMessage]);

  return (
    <form className="searchbar" onSubmit={submitForm}>
      <img className='search-icon' src={searchIcon} alt="Search Icon" /> {/* Replaced IconSearch with img */}
      <input
        type="text"
        value={userName}
        onChange={handleUserNameChange}
        placeholder="Search GitHub username…"
      />
      <span className="error">{!inputValueChanged ? errorMessage : ''}</span>
      <button type="submit" disabled={userName.length === 0}>Search</button>
    </form>
  );
}

// Define PropTypes to validate props
SearchBar.propTypes = {
  handleInput: PropTypes.func.isRequired, // handleInput is required and should be a function
  errorMessage: PropTypes.string,         // errorMessage is optional and should be a string
};

export default SearchBar;
