import React, { useState } from 'react';

import '../App/App.css';

import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { mainApi } from '../../utils/constants';
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
  const [submitError, setSubmitError] = useState([]);

  function handleRegister({ name, email, password }) {
    return mainApi.register(name, email, password)
    .then(() => {
      history.push('/movies');
    })
    .catch((err) => {
      setSubmitError(err);
    })
  }

  return (
    <BrowserRouter>
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
            <Login />
          </Route>
          <Route path='/movies'>
            <Header
              isLoggedIn={true}
            />
            <Movies />
            <Footer />
          </Route>
          <Route path='/saved-movies'>
            <Header
              isLoggedIn={true}
            />
            <SavedMovies />
            <Footer />
          </Route>
          <Route path='/profile'>
            <Header
              isLoggedIn={true}
            />
            <Profile />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
