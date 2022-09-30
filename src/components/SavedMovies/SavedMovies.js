import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <main className="content">
      <SearchForm />
      <MoviesCardList 
        isSavedList={true}
      />
    </main>
  );
}

export default SavedMovies;
