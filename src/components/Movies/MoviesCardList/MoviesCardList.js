import '../MoviesCardList/MoviesCardList.css';

import React, { useState } from 'react';

import MoviesCard from '../MoviesCardList/MoviesCard/MoviesCard';

import { getSavedMovie } from '../../../utils/utils';

function MoviesCardList({
  isLoading,
  movies,
  onSaveCard,
  savedMovies,
  onDeleteCard
}) {
  const width = window.innerWidth;
  let initialCardsQuantity;
  let nextCardPerRow;

  if (width <= 767) {
    initialCardsQuantity = 5;
    nextCardPerRow = 2;
  } else if (width >= 768 && width <= 1279) {
    initialCardsQuantity = 8;
    nextCardPerRow = 2;
  } else if (width >= 1280) {
    initialCardsQuantity = 12;
    nextCardPerRow = 4;
  } 

  const [totalQuantity, setTotalQuantity] = useState(initialCardsQuantity);

  function loadMoreImage() {
    setTotalQuantity(totalQuantity + nextCardPerRow);
  }

  return (
    <section className={`movies ${(isLoading) && 'movies_hidden'}`}>
      <div className='movies__container'>
        {movies?.slice(0, totalQuantity)?.map((card) => (
          <MoviesCard
            key={card.id}
            id={card.id}
            card={card}
            image={card.image.url}
            isSaved={getSavedMovie(savedMovies, card.id)}
            onSaveCard={onSaveCard}
            onDeleteCard={onDeleteCard}
          />
        ))}
      </div>
      <button
        className={(totalQuantity < movies.length) ? 'movies__button' : 'movies__button_disabled'}
        type='button'
        onClick={loadMoreImage}
      >Ещё</button>
    </section>
  );
}

export default MoviesCardList;
