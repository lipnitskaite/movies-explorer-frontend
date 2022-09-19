import '../MoviesCardList/MoviesCardList.css';

import React from 'react';

import MoviesCard from '../MoviesCardList/MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const savedCard = props.isSavedList;
  return (
    <section className='movies'>
      <MoviesCard 
        isSavedCard={savedCard}
      />
      <button className={props.isSavedList ? 'movies__button movies__button_disabled' : 'movies__button'}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
