import '../SearchForm/SearchForm.css';

import React, { useState, useEffect } from 'react';
import { NOT_FOUND_ERROR_MESSAGE, GENERAL_ERROR_MESSAGE } from '../../utils/constants';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ searchTerm, isValid, handleChange, filterShortMovies, shortMovies }) {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage('');
  }, [isValid, searchTerm]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!searchTerm) {
      setErrorMessage(NOT_FOUND_ERROR_MESSAGE);
    } else if (!isValid) {
      setErrorMessage(GENERAL_ERROR_MESSAGE);
    }
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
      <span className={`search-form__error ${!searchTerm && 'search-form__error_active'}`}>{errorMessage}</span>
    </section>
  );
}

export default SearchForm;
