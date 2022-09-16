import '../SearchForm/SearchForm.css';

import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__container'>
        <input className='search-form__input' placeholder='Фильм' type='search' required></input>
        <button className='search-form__button' type='submit'></button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
