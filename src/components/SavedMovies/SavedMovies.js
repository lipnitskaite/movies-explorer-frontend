import React, { useState, useEffect } from 'react';

import { mainApi } from '../../utils/constants';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    mainApi.getMovies()
      .then((savedMovies) => {
        setSavedMovies(savedMovies);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <main className="content">
      <SearchForm />
      <MoviesCardList
        movies={savedMovies}
        isSavedList={true}
      />
    </main>
  );
}

export default SavedMovies;
