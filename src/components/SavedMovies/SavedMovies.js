import React, { useState, useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import SavedMoviesCardList from '../SavedMovies/SavedMoviesCardList/SavedMoviesCardList';

import { handleMovieSearchFilter } from '../../utils/utils';
import { NOT_FOUND_ERROR_MESSAGE, EMPTY_QUERY_ERROR_MESSAGE, GENERAL_ERROR_MESSAGE } from '../../utils/constants';

function SavedMovies({
  isLoading,
  setIsLoading,
  onDeleteCard,
  savedMovies,
}) {
  const [filteredSavedMovies, setFilteredSavedMovies] = useState();
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [isMoviesValid, setIsMoviesValid] = useState(true);

  function switchShortMovies() {
    setIsShortMovie(!isShortMovie);
  }

  function handleSavedMovieSearch() {
    try {
      const results = handleMovieSearchFilter(savedMovies, searchTerm, isShortMovie);

      setFilteredSavedMovies(results);

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

  useEffect(() => {
    if (!searchTerm) {
      setFilteredSavedMovies(savedMovies);
    } else {
      const results = handleMovieSearchFilter(savedMovies, searchTerm, isShortMovie);

      setFilteredSavedMovies(results);
    }
  }, [savedMovies])

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
      <Preloader 
        isLoading={isLoading}
      />
      <SavedMoviesCardList
        isLoading={isLoading}
        filteredSavedMovies={filteredSavedMovies}
        onDeleteCard={onDeleteCard}
      />
    </main>
  );
}

export default SavedMovies;
