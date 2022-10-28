import React, { useState, useEffect } from 'react';

import { moviesApi } from '../../utils/constants';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    moviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
        setIsLoading(false);
      })
      .catch(err => console.log(err)); //обработать ошибку
  }, [])

  return (
    <main className="content">
      <SearchForm />
      <Preloader 
        isLoading={isLoading}
      />
      <MoviesCardList
        isLoading={isLoading}
        movies={movies}
      />
    </main>
  );
}

export default Movies;
