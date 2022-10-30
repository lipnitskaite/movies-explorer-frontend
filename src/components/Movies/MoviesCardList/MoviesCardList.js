import '../MoviesCardList/MoviesCardList.css';

import React, { useState } from 'react';

import MoviesCard from '../MoviesCardList/MoviesCard/MoviesCard';

function MoviesCardList({ isLoading, movies, isError}) {
  const width = window.innerWidth;
  let initialImagePerRow;
  let nextImagePerRow;

  if (width <= 767) {
    initialImagePerRow = 5;
    nextImagePerRow = 2;
  } else if (width >= 768 && width <= 1279) {
    initialImagePerRow = 8;
    nextImagePerRow = 2;
  } else if (width >= 1280) {
    initialImagePerRow = 12;
    nextImagePerRow = 4;
  } 

  const [row, setRow] = useState(initialImagePerRow);

  function loadMoreImage() {
    setRow(row + nextImagePerRow);
  }

  return (
    <section className={`movies ${isLoading && 'movies_hidden'}`}>
      <div className='movies__container'>
        {movies?.slice(0, row)?.map((card) => (
          <MoviesCard
            card={card}
          />
        ))}
      </div>
      <button
        className={`movies__button ${isError && 'movies__button_disabled'}`}
        type='button'
        onClick={loadMoreImage}
      >Ещё</button>
    </section>
  );
}

export default MoviesCardList;
