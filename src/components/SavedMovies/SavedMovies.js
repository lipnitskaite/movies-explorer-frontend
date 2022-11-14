import React, { useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMovies/SavedMoviesCardList/SavedMoviesCardList';
import { handleMovieSearchFilter } from '../../utils/utils';
import { NOT_FOUND_ERROR_MESSAGE, EMPTY_QUERY_ERROR_MESSAGE, GENERAL_ERROR_MESSAGE } from '../../utils/constants';

function SavedMovies({
  isLoading,
  setIsLoading,
  onDeleteCard,
  savedMovies
}) {
  const [filteredSavedMovies, setFilteredSavedMovies] = useState(JSON.parse(localStorage.getItem('saved-movies')) || savedMovies);
  const [isShortMovie, setIsShortMovie] = useState(localStorage.getItem('shortSavedMovieSwitcher') === 'true');
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('savedMovieSearchInput') || '');
  const [submitError, setSubmitError] = useState('');
  const [isMoviesValid, setIsMoviesValid] = useState(true);

  function switchShortMovies() {
    setIsShortMovie(!isShortMovie);
  }

  function handleSavedMovieSearch() {
    try {
      const results = handleMovieSearchFilter(savedMovies, searchTerm, isShortMovie);

      setFilteredSavedMovies(results);

      localStorage.setItem('savedMovieSearchInput', searchTerm);
      localStorage.setItem('shortSavedMovieSwitcher', isShortMovie);
      localStorage.setItem('saved-movies', JSON.stringify(results));

      if (!searchTerm) {
        setSubmitError(EMPTY_QUERY_ERROR_MESSAGE);
        setIsMoviesValid(false);
      } else if (searchTerm && results.length === 0) {
        setSubmitError(NOT_FOUND_ERROR_MESSAGE);
        setIsMoviesValid(false);
      } else {
        setSubmitError('');
        setIsMoviesValid(true);
      }

      setIsLoading(false);
    } catch (err) {
      setSubmitError(GENERAL_ERROR_MESSAGE);
      setIsLoading(false);
    }
  }

  return (
    <main className="content">
      <SearchForm 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSavedMovieSearch={handleSavedMovieSearch}
        filterShortMovies={switchShortMovies}
        shortMovies={isShortMovie}
        isMoviesValid={isMoviesValid}
        submitError={submitError}
      />
      <SavedMoviesCardList
        isLoading={isLoading}
        filteredSavedMovies={filteredSavedMovies}
        searchTerm={searchTerm}
        savedMovies={savedMovies}
        onDeleteCard={onDeleteCard}
        isShortMovie={isShortMovie}
      />
    </main>
  );
}

export default SavedMovies;
