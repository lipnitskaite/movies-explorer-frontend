import React, { useState, useEffect } from 'react';

import { moviesApi } from '../../utils/constants';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    moviesApi.getMovies()
    .then((movies) => {
      const results = movies.filter(movie => movie.nameRU.toLowerCase().includes(searchTerm));
      setMovies(results);
      setIsLoading(false);
    })
    .catch((err) => {
      setSubmitError(err);
      setIsLoading(false);
    })
  }, [searchTerm]);

  return (
    <main className="content">
      <SearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isValid={isValid}
        handleChange={handleChange}
        setSubmitError={setSubmitError}
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
