import React, { useState, useEffect } from 'react';

import '../App/App.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Switch, Route, useHistory } from 'react-router-dom';
import { mainApi } from '../../utils/constants';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ProtectedAuthRoute from '../ProtectedRoute/ProtectedAuthRoute';
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

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'false');
  const [isLoading, setIsLoading] = useState(true);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isOperationSuccessful, setIsOperationSuccessful] = useState(true);
  const [isFormInputDisabled, setIsFormInputDisabled] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [submitError, setSubmitError] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [operationResultMessage, setOperationResultMessage] = useState('');

  const closePopup = () => {
    setIsInfoTooltipOpen(false);
  };

  function redirectUnauthorized(err) {
    if (err.status === 401) {
      setLoggedIn(false);
      setCurrentUser({});
      setSavedMovies([]);
      localStorage.clear();
      history.push('/');
    }
  }

  async function getUserData() {
    try {
      const response = await mainApi.getUserInfo();
      return response;
    } catch (err) {
      setIsInfoTooltipOpen(true);
      setIsOperationSuccessful(false);
      setOperationResultMessage(`Невозможно отобразить данные пользователя. ${err.message}`);

      redirectUnauthorized(err);
    }
  };

  async function getSavedMovies() {
    try {
      const movies = await mainApi.getMovies();
      return movies;
    } catch (err) {
      setIsInfoTooltipOpen(true);
      setIsOperationSuccessful(false);
      setOperationResultMessage(`Невозможно отобразить сохраненные фильмы. ${err.message}`);

      redirectUnauthorized(err);
    }
  };

  function handleRegister({ name, email, password }) {
    setIsFormInputDisabled(true);
    return mainApi.register(name, email, password)
    .then(() => {
      setLoggedIn(!loggedIn);
      history.push('/movies');
    })
    .then(() => localStorage.setItem('isLoggedIn', loggedIn))
    .catch((err) => {
      setSubmitError(err.message);
      setIsFormInputDisabled(false);
    })
  }

  function handleLogin({ email, password }) {
    setIsFormInputDisabled(true);
    return mainApi.authorize(email, password)
    .then(() => {
      setLoggedIn(!loggedIn);
      history.push('/movies');
    })
    .then(() => localStorage.setItem('isLoggedIn', loggedIn))
    .catch((err) => {
      setSubmitError(err.message);
      setIsFormInputDisabled(false);
    })
  }

  function handleUpdateUserInfo({ name, email }) {
    setIsFormInputDisabled(true);
    return mainApi.updateUserInfo(name, email)
    .then((userData) => {
      setCurrentUser(userData);
      setIsInfoTooltipOpen(true);
      setIsOperationSuccessful(true);
      setOperationResultMessage('Данные пользователя успешно обновлены!');
    })
    .catch((err) => {
      setSubmitError(err.message);
      setIsFormInputDisabled(false);
    })
  }

  function handleUserSignOut() {
    return mainApi.signout()
    .then(() => {
      setLoggedIn(false);
      setCurrentUser({});
      setSubmitError([]);
      setSavedMovies([]);
      setOperationResultMessage('');
      localStorage.clear();
      history.push('/');
    })
    .catch(err => setSubmitError(err.message))
  }

  function handleSaveMovie(movie) {
    mainApi.addMovie(movie)
    .then(movie => setSavedMovies([ movie, ...savedMovies ]))
    .catch((err) => {
      setIsInfoTooltipOpen(true);
      setIsOperationSuccessful(false);
      setOperationResultMessage(`Невозможно сохранить фильм. ${err.message}`);
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
      setOperationResultMessage(`Невозможно убрать фильм из сохраненных. ${err.message}`);
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
        setOperationResultMessage(`Невозможно отобразить данные пользователя. ${err.message}`);

        redirectUnauthorized(err);
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
        setOperationResultMessage(`Невозможно отобразить сохраненные фильмы. ${err.message}`);

        redirectUnauthorized(err);
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
          <ProtectedAuthRoute path='/signup' loggedIn={loggedIn}>
            <Register 
            handleRegister={handleRegister}
            submitError={submitError}
            setSubmitError={setSubmitError}
            isDisabled={isFormInputDisabled}
            />
          </ProtectedAuthRoute>
          <ProtectedAuthRoute path='/signin' loggedIn={loggedIn}>
            <Login
              handleLogin={handleLogin}
              submitError={submitError}
              setSubmitError={setSubmitError}
              isDisabled={isFormInputDisabled}
            />
          </ProtectedAuthRoute>
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
              handleUpdateUserInfo={handleUpdateUserInfo}
              userSignOut={handleUserSignOut}
              isDisabled={isFormInputDisabled}
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
