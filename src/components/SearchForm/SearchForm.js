import '../SearchForm/SearchForm.css';

import React from 'react';

function AboutMe() {
  return (
    <section className='search-form'>
      <form className='search-form__container'>
        <input className='search-form__input' placeholder='Фильм' type='search' required></input>
        <button className='search-form__button' type='submit'></button>
      </form>
    </section>
  );
}

export default AboutMe;
