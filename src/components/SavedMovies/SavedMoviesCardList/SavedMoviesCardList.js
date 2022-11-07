import '../../Movies/MoviesCardList/MoviesCardList.css';

import React from 'react';

import MoviesCard from '../../Movies/MoviesCardList/MoviesCard/MoviesCard';

function SavedMoviesCardList({ isLoading, savedMovies, onDeleteCard }) {
  return (
    <section className={`movies ${(isLoading || !savedMovies) && 'movies_hidden'}`}>
      <div className='movies__container'>
        {savedMovies?.map((card) => (
          <MoviesCard
            key={card.id}
            id={card.id}
            card={card}
            image={card.image}
            onDeleteCard={onDeleteCard}
          />
        ))}
      </div>
    </section>
  );
}

export default SavedMoviesCardList;
