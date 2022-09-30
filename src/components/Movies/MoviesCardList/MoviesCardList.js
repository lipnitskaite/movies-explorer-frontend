import '../MoviesCardList/MoviesCardList.css';

import React from 'react';

import MoviesCard from '../MoviesCardList/MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const savedCard = props.isSavedList;
  return (
    <section className='movies'>
      <div className='movies__container'>
        <MoviesCard 
          isSavedCard={savedCard}
        />
      </div>
      <button
        className={props.isSavedList ? 'movies__button movies__button_disabled' : 'movies__button'}
        type='button'
      >Ещё</button>
    </section>
  );
}

export default MoviesCardList;
