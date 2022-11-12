import '../../Movies/MoviesCardList/MoviesCardList.css';

import React from 'react';

import MoviesCard from '../../Movies/MoviesCardList/MoviesCard/MoviesCard';

function SavedMoviesCardList({
  filteredSavedMovies,
  searchTerm,
  isLoading,
  savedMovies,
  onDeleteCard,
  isShortMovie
}) {
  function renderMovies() {
    if (!searchTerm && !isShortMovie) {
      return savedMovies;
    } else {
      return filteredSavedMovies;
    }
  }

  return (
    <section className={`movies ${(isLoading) && 'movies_hidden'}`}>
      <div className='movies__container'>
        {renderMovies()?.map((card) => (
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
