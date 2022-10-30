import '../SearchForm/SearchForm.css';

import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ searchTerm, handleChange }) {

  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <form className='search-form__form' name='search-form' noValidate>
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
        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
