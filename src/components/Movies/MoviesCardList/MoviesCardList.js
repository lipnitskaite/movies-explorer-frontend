import '../MoviesCardList/MoviesCardList.css';

import React from 'react';

import MoviesCard from '../MoviesCardList/MoviesCard/MoviesCard';

function MoviesCardList({ movies, isSavedList}) {
  const savedCard = isSavedList;
  
  return (
    <section className='movies'>
      <div className='movies__container'>
        {movies.map((card) => (
          <MoviesCard
            card={card}
            isSavedCard={savedCard}
          />
        ))}
      </div>
      <button
        className={isSavedList ? 'movies__button movies__button_disabled' : 'movies__button'}
        type='button'
      >Ещё</button>
    </section>
  );
}

export default MoviesCardList;
