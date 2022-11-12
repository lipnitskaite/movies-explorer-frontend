import React, { useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMovies/SavedMoviesCardList/SavedMoviesCardList';
import { handleMovieSearchFilter } from '../../utils/utils';
import { GENERAL_ERROR_MESSAGE } from '../../utils/constants';

function SavedMovies({
  isLoading,
  setIsLoading,
  setSubmitError,
  onDeleteCard,
  savedMovies
}) {
  const [filteredSavedMovies, setFilteredSavedMovies] = useState(JSON.parse(localStorage.getItem('saved-movies')) || savedMovies);
  const [isShortMovie, setIsShortMovie] = useState(localStorage.getItem('shortSavedMovieSwitcher') === 'true');
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('savedMovieSearchInput') || '');

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
        filteredMovies={filteredSavedMovies}
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
