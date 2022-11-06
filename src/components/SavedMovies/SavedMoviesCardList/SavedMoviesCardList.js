import '../../Movies/MoviesCardList/MoviesCardList.css';

import React from 'react';

import MoviesCard from '../../Movies/MoviesCardList/MoviesCard/MoviesCard';

function SavedMoviesCardList({ isLoading, movies }) {
  return (
    <section className={`movies ${isLoading && 'movies_hidden'}`}>
      <div className='movies__container'>
        {movies.map((card) => (
          <MoviesCard
            key={card.id}
            id={card.id}
            card={card}
            image={card.image}
          />
        ))}
      </div>
    </section>
  );
}

export default SavedMoviesCardList;
