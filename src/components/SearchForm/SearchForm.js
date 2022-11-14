import '../SearchForm/SearchForm.css';

import React from 'react';
import { useLocation } from 'react-router-dom';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  searchTerm,
  setSearchTerm,
  handleMovieSearch,
  handleSavedMovieSearch,
  filterShortMovies,
  shortMovies,
  isMoviesValid,
  submitError,
}) {
  const location = useLocation();

  function handleChange(event) {
    setSearchTerm(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (location.pathname === '/movies') {
      handleMovieSearch();
    } else if (location.pathname === '/saved-movies') {
      handleSavedMovieSearch();
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
      <span className={`${(isMoviesValid === false) ? 'search-form__error search-form__error_active' : 'search-form__error'}`}>{submitError}</span>
    </section>
  );
}

export default SearchForm;
