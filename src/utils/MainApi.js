import {
  UNAUTHORIZED_ERROR_MESSAGE,
  CONFLICT_RESPONSE_ERROR_MESSAGE,
  GENERAL_ERROR_MESSAGE
} from '../utils/constants';

export default class MainApi {
  constructor({ address, headers }) {
    this._address = address;
    this._headers = headers;
  }

  _handleResponse = (res) => {
    switch (res.status) {
      case 200:
        return res.json();
      case 401:
        return Promise.reject({ message: UNAUTHORIZED_ERROR_MESSAGE, status: res.status });
      case 409:
        return Promise.reject({ message: CONFLICT_RESPONSE_ERROR_MESSAGE, status: res.status });
      default:
        return Promise.reject({ message: GENERAL_ERROR_MESSAGE, status: res.status });
    }
  };
  
  register(name, email, password) {
    return fetch(`${this._address}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ name, email, password })
    })
    .then(this._handleResponse)
  };

  authorize(email, password) {
    return fetch(`${this._address}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ email, password })
    })
    .then(this._handleResponse)
  };
  
  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    })
    .then(this._handleResponse);
  }

  updateUserInfo(name, email) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ name, email })
    })
    .then(this._handleResponse);
  }

  signout() {
    return fetch(`${this._address}/signout`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    })
    .then(this._handleResponse);
  }

  addMovie(data) {
    return fetch(`${this._address}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image.url,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN
      })
    })
    .then(this._handleResponse);
  }

  getMovies() {
    return fetch(`${this._address}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    })
    .then(this._handleResponse);
  }

  deleteMovie(id) {
    return fetch(`${this._address}/movies/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    })
    .then(this._handleResponse)
  }
}
