import React, { useState, useEffect } from 'react';

import '../App/App.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Switch, Route, useHistory } from 'react-router-dom';
import { mainApi } from '../../utils/constants';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
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
  const [currentUser, setCurrentUser] = useState({});
  const [submitError, setSubmitError] = useState([]);

  function getUserData() {
    return mainApi.getUserInfo()
    .then((userData) => {
      setCurrentUser(userData);
      setIsLoading(false);
    })
    .catch(err => setSubmitError(err))
  };

  useEffect(() => {
    if (loggedIn) {
      getUserData();
    }
  }, [loggedIn])

  function handleRegister({ name, email, password }) {
    return mainApi.register(name, email, password)
    .then(() => {
      getUserData();
      setLoggedIn(true);
      history.push('/movies')
    })
    .catch(err => setSubmitError(err))
  }

  function handleLogin({ email, password }) {
    return mainApi.authorize(email, password)
    .then(() => {
      getUserData();
      setLoggedIn(true);
      history.push('/movies')
    })
    .catch(err => setSubmitError(err))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Header
              isLoggedIn={false}
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
              isLoggedIn={true}
            />
            <Movies
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute path='/saved-movies' loggedIn={loggedIn}>
            <Header
              isLoggedIn={true}
            />
            <SavedMovies />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute path='/profile' loggedIn={loggedIn}>
            <Header
              isLoggedIn={true}
            />
            <Profile
              isLoading={isLoading}
              submitError={submitError}
            />
          </ProtectedRoute>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
