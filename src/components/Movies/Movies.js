import React, { useState, useEffect } from 'react';

import MoviesApi from '../../utils/MoviesApi';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function Movies() {
  const moviesApi = new MoviesApi({
    address: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: { 'Content-Type': 'application/json' },
  });

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <main className="content">
      <SearchForm />
      <MoviesCardList 
        movies={movies}
      />
    </main>
  );
}

export default Movies;
