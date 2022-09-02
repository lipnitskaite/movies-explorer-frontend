import React from 'react';

import '../App/App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Header />
            <Footer />
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
