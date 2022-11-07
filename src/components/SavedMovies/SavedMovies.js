import React, { useState, useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMovies/SavedMoviesCardList/SavedMoviesCardList';
import { handleMovieSearchFilter } from '../../utils/utils';


function SavedMovies({ isLoading, setIsLoading, submitError, setSubmitError, onDeleteCard, savedMovies }) {
  const [filteredMovies, setFilteredMovies] = useState();
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
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
    try {
      const results = handleMovieSearchFilter(savedMovies, searchTerm, isShortMovie);
      setFilteredMovies(results); 
      setIsLoading(false);
    } catch (err) {
      setSubmitError(err);
      setIsLoading(false);
    }
  }, [searchTerm, isShortMovie, setIsLoading, savedMovies, setSubmitError]);

  return (
    <main className="content">
      <SearchForm 
        searchTerm={searchTerm}
        isValid={isValid}
        handleChange={handleChange}
        filterShortMovies={switchShortMovies}
        shortMovies={isShortMovie}
      />
      <SavedMoviesCardList
        isLoading={isLoading}
        searchTerm={searchTerm}
        savedFilteredMovies={filteredMovies}
        savedMovies={savedMovies}
        onDeleteCard={onDeleteCard}
        isShortMovie={isShortMovie}
      />
    </main>
  );
}

export default SavedMovies;
