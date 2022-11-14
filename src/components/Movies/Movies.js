import React, { useState } from 'react';

import { moviesApi } from '../../utils/constants';
import { handleMovieSearchFilter } from '../../utils/utils';
import { NOT_FOUND_ERROR_MESSAGE, EMPTY_QUERY_ERROR_MESSAGE, GENERAL_ERROR_MESSAGE } from '../../utils/constants';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function Movies({
  isLoading,
  setIsLoading,
  onSaveCard,
  savedMovies,
  onDeleteCard,
}) {
  const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem('movies')) || []);
  const [isShortMovie, setIsShortMovie] = useState(localStorage.getItem('shortMovieSwitcher') === 'true');
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('movieSearchInput') || '');
  const [submitError, setSubmitError] = useState('');
  const [isMoviesValid, setIsMoviesValid] = useState(true);

  function switchShortMovies() {
    setIsShortMovie(!isShortMovie);
  }

  function handleMovieSearch() {
    if (!searchTerm) {
      setSubmitError(EMPTY_QUERY_ERROR_MESSAGE);
      setIsMoviesValid(false);
    } else {
      moviesApi.getMovies()
      .then((movies) => {
        movies.forEach(movie => movie.image.url = `https://api.nomoreparties.co${movie.image.url}`)
        const results = handleMovieSearchFilter(movies, searchTerm, isShortMovie);

        setFilteredMovies(results);

        localStorage.setItem('movieSearchInput', searchTerm);
        localStorage.setItem('shortMovieSwitcher', isShortMovie);
        localStorage.setItem('movies', JSON.stringify(results));

        if (results.length === 0) {
          setSubmitError(NOT_FOUND_ERROR_MESSAGE);
          setIsMoviesValid(false);
        } else {
          setSubmitError('');
          setIsMoviesValid(true);
        }
      })
      .catch(() => setSubmitError(GENERAL_ERROR_MESSAGE))
      .finally(() => setIsLoading(false))
    }
  }

  return (
    <main className="content">
      <SearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleMovieSearch={handleMovieSearch}
        filterShortMovies={switchShortMovies}
        shortMovies={isShortMovie}
        submitError={submitError}
        isMoviesValid={isMoviesValid}
      />
      <Preloader 
        isLoading={isLoading}
      />
      <MoviesCardList
        isLoading={isLoading}
        movies={filteredMovies}
        onSaveCard={onSaveCard}
        savedMovies={savedMovies}
        onDeleteCard={onDeleteCard}
      />
    </main>
  );
}

export default Movies;
