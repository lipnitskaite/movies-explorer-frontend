import '../SearchForm/SearchForm.css';

import React, { useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ searchTerm, isValid, handleChange, filterShortMovies, shortMovies }) {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage('');
  }, [isValid]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!isValid) {
      setErrorMessage('Нужно ввести ключевое слово.');
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
      <span className={`search-form__error ${!isValid && 'search-form__error_active'}`}>{errorMessage}</span>
    </section>
  );
}

export default SearchForm;
