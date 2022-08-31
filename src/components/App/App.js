import '../App/App.css';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
