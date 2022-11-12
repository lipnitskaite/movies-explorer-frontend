import '../SearchForm/SearchForm.css';

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { NOT_FOUND_ERROR_MESSAGE, EMPTY_QUERY_ERROR_MESSAGE } from '../../utils/constants';

function SearchForm({
  searchTerm,
  setSearchTerm,
  handleMovieSearch,
  handleSavedMovieSearch,
  filterShortMovies,
  shortMovies,
  filteredMovies,
  }) {
    const location = useLocation();
    const [isValid, setIsValid] = useState(true);
    const [submitError, setSubmitError] = useState('');

    function handleChange(event) {
      setSearchTerm(event.target.value);
    };

    function showErrorMessage() {
      if (!searchTerm) {
        setSubmitError(EMPTY_QUERY_ERROR_MESSAGE);
        setIsValid(false);
      } else if (searchTerm && filteredMovies.length === 0) {
        setSubmitError(NOT_FOUND_ERROR_MESSAGE);
        setIsValid(false);
      }
    }

    function handleSubmit(event) {
      event.preventDefault();

      if (location.pathname === '/movies') {
        handleMovieSearch();
      } else if (location.pathname === '/saved-movies') {
        handleSavedMovieSearch();
      }

      showErrorMessage();
    }
  
  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <form className='search-form__form' name='search-form' noValidate onSubmit={handleSubmit}>
          <input 
            className='search-form__input'
            placeholder='Фильм'
            type='search'
            value={searchTerm || ''}
            onChange={handleChange}
            required
          ></input>
          <button className='search-form__button' type='submit'></button>
        </form>
        <FilterCheckbox
          filterShortMovies={filterShortMovies}
          shortMovies={shortMovies}
        />
      </div>
      <span className={`${isValid ? 'search-form__error' : 'search-form__error search-form__error_active'}`}>{submitError}</span>
    </section>
  );
}

export default SearchForm;
