import '../MoviesCardList/MoviesCardList.css';

import React from 'react';

import MoviesCard from '../MoviesCardList/MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="movies">
      <MoviesCard />
    </section>
  );
}

export default MoviesCardList;
