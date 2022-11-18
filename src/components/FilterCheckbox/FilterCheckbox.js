import '../FilterCheckbox/FilterCheckbox.css';

import React from 'react';

function FilterCheckbox({ filterShortMovies, shortMovies }) {
  return (
    <form className='filter-checkbox'>
      <input className='filter-checkbox__input' type='checkbox' id='checkbox-input' onChange={filterShortMovies} checked={shortMovies ? true : false}></input>
      <label className='filter-checkbox__label' htmlFor='checkbox-input'>Короткометражки</label>
    </form>
  );
}

export default FilterCheckbox;
