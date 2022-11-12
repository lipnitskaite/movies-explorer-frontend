import '../../Movies/MoviesCardList/MoviesCardList.css';

import React from 'react';

import MoviesCard from '../../Movies/MoviesCardList/MoviesCard/MoviesCard';

function SavedMoviesCardList({ filteredSavedMovies, isLoading, onDeleteCard }) {
  return (
    <section className={`movies ${(isLoading) && 'movies_hidden'}`}>
      <div className='movies__container'>
        {filteredSavedMovies?.map((card) => (
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
