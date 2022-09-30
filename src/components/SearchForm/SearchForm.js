import '../SearchForm/SearchForm.css';

import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <form className='search-form__form'>
          <input className='search-form__input' placeholder='Фильм' type='search' required></input>
          <button className='search-form__button' type='submit'></button>
        </form>
        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
