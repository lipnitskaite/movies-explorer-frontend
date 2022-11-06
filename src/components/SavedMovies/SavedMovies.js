import React, { useState, useEffect } from 'react';

import { mainApi } from '../../utils/constants';
import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMovies/SavedMoviesCardList/SavedMoviesCardList';

function SavedMovies({ isLoading, setIsLoading, submitError, setSubmitError }) {
  const [renderedSavedMovies, setRenderedSavedMovies] = useState([]);
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
    mainApi.getMovies()
      .then((data) => {
        setRenderedSavedMovies(data);
        setIsLoading(false);
      })
      .catch(err => {
        setSubmitError(err);
        setIsLoading(false);
      });
  }, [searchTerm, isShortMovie, setIsLoading, setSubmitError])

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
        movies={renderedSavedMovies}
      />
    </main>
  );
}

export default SavedMovies;
