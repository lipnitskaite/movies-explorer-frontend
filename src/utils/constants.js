import MainApi from '../utils/MainApi';
import MoviesApi from '../utils/MoviesApi';

const mainApi = new MainApi({
  address: 'https://api.movies.lipnitskaite.nomoredomains.sbs',
  headers: { 'Content-Type': 'application/json' },
});

const moviesApi = new MoviesApi({
  address: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: { 'Content-Type': 'application/json' },
});

export {
  mainApi,
  moviesApi
}