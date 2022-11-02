import { SHORT_MOVIES_DURATION } from '../utils/constants';

function transformMovieDuration(duration) {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;

  if (hours === 0) {
    return `${minutes}м`
  } else if (minutes === 0) {
    return `${hours}ч`
  }  else {
    return `${hours}ч${minutes}м`
  }
}

function handleMovieSearchFilter(movies, searchTerm) {
  return movies.filter(movie => movie.nameRU.toLowerCase().includes(searchTerm));
}

function handleShortMoviesFilter(movies) {
  return movies.filter(movie => movie.duration <= SHORT_MOVIES_DURATION);
}

export {
  transformMovieDuration,
  handleMovieSearchFilter,
  handleShortMoviesFilter
}