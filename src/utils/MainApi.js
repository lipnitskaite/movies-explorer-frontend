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
        return Promise.reject('Неправильные почта или пароль.');
      case 409:
        return Promise.reject('Пользователь с такой почтой уже зарегистрирован.');
      default:
        console.log(res.status);
        return Promise.reject('Что-то пошло не так.');
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
}
