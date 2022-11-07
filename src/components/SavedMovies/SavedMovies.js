import React, { useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMovies/SavedMoviesCardList/SavedMoviesCardList';

function SavedMovies({ isLoading, setIsLoading, submitError, setSubmitError, onDeleteCard, savedMovies }) {
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
        savedMovies={savedMovies}
        onDeleteCard={onDeleteCard}
      />
    </main>
  );
}

export default SavedMovies;
