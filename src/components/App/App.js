import React, { useState, useEffect } from 'react';

import '../App/App.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Switch, Route, useHistory } from 'react-router-dom';
import { mainApi } from '../../utils/constants';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Auth/Register/Register';
import Login from '../Auth/Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isOperationSuccessful, setIsOperationSuccessful] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [submitError, setSubmitError] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [operationResultMessage, setOperationResultMessage] = useState('');

  const closePopup = () => {
    setIsInfoTooltipOpen(false);
  };

  async function getUserData() {
    try {
      const response = await mainApi.getUserInfo();
      return response;
    } catch (err) {
      setIsInfoTooltipOpen(true);
      setIsOperationSuccessful(false);
      setOperationResultMessage(`Невозможно отобразить данные пользователя. ${err}`);
    }
  };

  async function getSavedMovies() {
    try {
      const movies = await mainApi.getMovies();
      return movies;
    } catch (err) {
      setIsInfoTooltipOpen(true);
      setIsOperationSuccessful(false);
      setOperationResultMessage(`Невозможно отобразить сохраненные фильмы. ${err}`);
    }
  };

  function handleRegister({ name, email, password }) {
    return mainApi.register(name, email, password)
    .then(() => {
      setLoggedIn(true);
      history.push('/movies')
    })
    .catch(err => setSubmitError(err))
  }

  function handleLogin({ email, password }) {
    return mainApi.authorize(email, password)
    .then(() => {
      setLoggedIn(true);
      history.push('/movies')
    })
    .catch(err => setSubmitError(err))
  }

  function handleUpdateUserInfo({ name, email }) {
    return mainApi.updateUserInfo(name, email)
    .then((userData) => {
      setCurrentUser(userData);
      setIsInfoTooltipOpen(true);
      setIsOperationSuccessful(true);
      setOperationResultMessage('Данные пользователя успешно обновлены!');
    })
    .catch(err => setSubmitError(err))
  }

  function handleUserSignOut() {
    return mainApi.signout()
    .then(() => {
      setLoggedIn(false);
      setCurrentUser({});
      history.push('/');
    })
    .catch(err => setSubmitError(err))
  }

  function handleSaveMovie(movie) {
    mainApi.addMovie(movie)
    .then(movie => setSavedMovies([ movie, ...savedMovies ]))
    .catch((err) => {
      setIsInfoTooltipOpen(true);
      setIsOperationSuccessful(false);
      setOperationResultMessage(`Невозможно сохранить фильм. ${err}`);
    })
  }

  function handleDeleteMovie(movie) {
    const savedMovie = savedMovies.find(item => item.movieId === movie.id || item.movieId === movie.movieId);
    mainApi.deleteMovie(savedMovie._id)
    .then((movie) => {
      setSavedMovies((state) => state.filter((c) => c._id !== movie._id));
    })
    .catch((err) => {
      setIsInfoTooltipOpen(true);
      setIsOperationSuccessful(false);
      setOperationResultMessage(`Невозможно убрать фильм из сохраненных. ${err}`);
    })
    .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    if (loggedIn) {
      getUserData()
      .then(userData => setCurrentUser(userData))
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setIsOperationSuccessful(false);
        setOperationResultMessage(`Невозможно отобразить данные пользователя. ${err}`);
      })
      .finally(() => setIsLoading(false))
    }
  }, [loggedIn])
  
  useEffect(() => {
    if (loggedIn) {
      getSavedMovies()
      .then(cards => setSavedMovies(cards))
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setIsOperationSuccessful(false);
        setOperationResultMessage(`Невозможно отобразить сохраненные фильмы. ${err}`);
      })
      .finally(() => setIsLoading(false))
    }
  }, [loggedIn])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Header
              isLoggedIn={loggedIn && currentUser}
            />
            <Main />
            <Footer />
          </Route>
          <Route path='/signup'>
            <Register 
            handleRegister={handleRegister}
            submitError={submitError}
            setSubmitError={setSubmitError}
            />
          </Route>
          <Route path='/signin'>
            <Login
              handleLogin={handleLogin}
              submitError={submitError}
              setSubmitError={setSubmitError}
            />
          </Route>
          <ProtectedRoute path='/movies' loggedIn={loggedIn}>
            <Header
              isLoggedIn={loggedIn}
            />
            <Movies
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              onSaveCard={handleSaveMovie}
              savedMovies={savedMovies}
              onDeleteCard={handleDeleteMovie}
            />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute path='/saved-movies' loggedIn={loggedIn}>
            <Header
              isLoggedIn={loggedIn}
            />
            <SavedMovies
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setSubmitError={setSubmitError}
              onDeleteCard={handleDeleteMovie}
              savedMovies={savedMovies}
            />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute path='/profile' loggedIn={loggedIn}>
            <Header
              isLoggedIn={loggedIn}
            />
            <Profile
              isLoading={isLoading}
              submitError={submitError}
              handleUpdateUserInfo={handleUpdateUserInfo}
              setSubmitError={setSubmitError}
              userSignOut={handleUserSignOut}
            />
          </ProtectedRoute>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>

        <InfoTooltip 
          isOpen={isInfoTooltipOpen}
          isSuccessful={isOperationSuccessful}
          onClose={closePopup}
          operationResultMessage={operationResultMessage}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
