import React from 'react';

import '../App/App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Auth/Register/Register';
import Login from '../Auth/Login/Login';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
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
            <Register />
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
