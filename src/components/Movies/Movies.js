import React, { useState, useEffect } from 'react';

import { moviesApi } from '../../utils/constants';
import { handleMovieSearchFilter, handleShortMoviesFilter } from '../../utils/utils';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function Movies({ isLoading, setIsLoading }) {
  const [movies, setMovies] = useState([]);
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [submitError, setSubmitError] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setSearchTerm(value);
    setSubmitError({ ...submitError, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  function switchShortMovies() {
    setIsShortMovie(!isShortMovie);
  }

  useEffect(() => {
    moviesApi.getMovies()
    .then((movies) => {
      if (isShortMovie) {
        const shortMovies = handleShortMoviesFilter(movies);
        const results = handleMovieSearchFilter(shortMovies, searchTerm);
        setMovies(results);
      } else {
        const results = handleMovieSearchFilter(movies, searchTerm);
        setMovies(results);
      }
      setIsLoading(false);
    })
    .catch((err) => {
      setSubmitError(err);
      setIsLoading(false);
    })
  }, [searchTerm, isShortMovie, setIsLoading]);

  return (
    <main className="content">
      <SearchForm
        searchTerm={searchTerm}
        isValid={isValid}
        handleChange={handleChange}
        filterShortMovies={switchShortMovies}
        shortMovies={isShortMovie}
      />
      <Preloader 
        isLoading={isLoading}
      />
      <MoviesCardList
        isLoading={isLoading}
        isValid={isValid}
        movies={movies}
        isError={!isValid}
      />
    </main>
  );
}

export default Movies;
