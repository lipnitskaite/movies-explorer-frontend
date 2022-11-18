export default class MoviesApi {
  constructor({ address, headers, notAuthorizedHandler }) {
    this._address = address;
    this._headers = headers;
    this._notAuthorizedHandler = notAuthorizedHandler;
  }

  _handleResponse = (res) => {
    if (res.status === 401) {
      this._notAuthorizedHandler();
    }
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  getMovies() {
    return fetch(`${this._address}`, {
      method: 'GET',
    })
    .then(this._handleResponse);
  }
}
