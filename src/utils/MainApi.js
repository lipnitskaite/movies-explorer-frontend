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
