import '../SearchForm/SearchForm.css';

import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  searchTerm,
  setSearchTerm,
  handleMovieSearch,
  filterShortMovies,
  shortMovies,
  submitError,
  filteredMovies
  }) {
  function handleChange(event) {
    setSearchTerm(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    handleMovieSearch();
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
      <span className={`search-form__error ${(!searchTerm || filteredMovies.length === 0) && 'search-form__error_active'}`}>{submitError}</span>
    </section>
  );
}

export default SearchForm;
