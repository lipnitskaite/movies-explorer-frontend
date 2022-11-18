import MainApi from '../utils/MainApi';
import MoviesApi from '../utils/MoviesApi';

const mainApi = new MainApi({
  address: 'https://api.movies.lipnitskaite.nomoredomains.sbs',
  headers: { 
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
});

const moviesApi = new MoviesApi({
  address: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: { 'Content-Type': 'application/json' },
});

const SHORT_MOVIES_DURATION = 40;
const NOT_FOUND_ERROR_MESSAGE = 'Ничего не найдено.';
const UNAUTHORIZED_ERROR_MESSAGE = 'Неправильные почта или пароль.';
const CONFLICT_RESPONSE_ERROR_MESSAGE = 'Пользователь с такой почтой уже зарегистрирован.';
const EMPTY_QUERY_ERROR_MESSAGE = 'Нужно ввести ключевое слово.';
const GENERAL_ERROR_MESSAGE = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

export {
  mainApi,
  moviesApi,
  SHORT_MOVIES_DURATION,
  NOT_FOUND_ERROR_MESSAGE,
  UNAUTHORIZED_ERROR_MESSAGE,
  CONFLICT_RESPONSE_ERROR_MESSAGE,
  EMPTY_QUERY_ERROR_MESSAGE,
  GENERAL_ERROR_MESSAGE,
}