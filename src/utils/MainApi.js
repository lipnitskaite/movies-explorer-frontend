export default class MainApi {
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

  // const checkResponse = (response) => {
  //   if (response.ok) {
  //     return response.json();
  //   }
  //   return response.json()
  //   .then((data) => {
  //     const { statusCode } = data;
  //     const { message } = data.message;
  //     const error = new Error(message || 'Что-то пошло не так');
  //     error.status = statusCode;
  //     throw error;
  //   })
  // }
  
  register(name, email, password) {
    return fetch(`${this._address}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    })
    .then(this._handleResponse)
  };

  getMovies() {
    return fetch(`${this._address}/movies`, {
      method: 'GET',
    })
    .then(this._handleResponse);
  }
  
  saveMovie(data) {
    return fetch(`${this._address}/saved-movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country : data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image.url,
        trailerLink: data.trailerLink,
        thumbnail: data.thumbnail.url,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN
      })
    })
    .then(this._handleResponse);
  }
}
