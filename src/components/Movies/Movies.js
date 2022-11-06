import React, { useState, useEffect } from 'react';

import { moviesApi } from '../../utils/constants';
import { handleMovieSearchFilter } from '../../utils/utils';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function Movies({ isLoading, setIsLoading, onSaveCard, savedMovies }) {
  const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem('movies')) || []);
  const [isShortMovie, setIsShortMovie] = useState(localStorage.getItem('shortMovieSwitcher') === 'true');
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('movieSearchInput') || '');
  const [submitError, setSubmitError] = useState({});
  const [isValid, setIsValid] = useState(true);

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
      movies.forEach(movie => movie.image.url = `https://api.nomoreparties.co${movie.image.url}`)
      const results = handleMovieSearchFilter(movies, searchTerm, isShortMovie);
      setFilteredMovies(results);

      localStorage.setItem(`movieSearchInput`, searchTerm);
      localStorage.setItem(`shortMovieSwitcher`, isShortMovie);
      localStorage.setItem(`movies`, JSON.stringify(results));

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
        searchTerm={searchTerm}
        movies={filteredMovies}
        onSaveCard={onSaveCard}
        savedMovies={savedMovies}
      />
    </main>
  );
}

export default Movies;
