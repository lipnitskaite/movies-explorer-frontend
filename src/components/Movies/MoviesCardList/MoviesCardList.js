import '../MoviesCardList/MoviesCardList.css';

import React from 'react';

import MoviesCard from '../MoviesCardList/MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className='movies'>
      <MoviesCard />
      <button className='movies__button'>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
